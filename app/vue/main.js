import Vue from 'vue';

import MainApp from './components/MainApp.vue';
import Router from './router.js';

import * as VueGoogleMaps from 'vue2-google-maps';
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBm1U0LUpPZIraBBb6OxAMa9O6mXnrJgzk'
  }
});

new Vue({
  router: Router.getRouter(),
  el: '#app',
  mounted() {
    // do something after mounting vue instance
    // this.initMap()
  },
  methods: {
    initMap: function() {
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat:40.3440, lng:-74.6514},
        zoom: 16,
        styles: [
          {
              "featureType": "all",
              "elementType": "geometry",
              "stylers": [
                  {
                      "hue": "#ff4400"
                  },
                  {
                      "saturation": -68
                  },
                  {
                      "lightness": -4
                  },
                  {
                      "gamma": 0.72
                  }
              ]
          },
          {
              "featureType": "administrative.province",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "color": "#521212"
                  },
                  {
                      "weight": "1.21"
                  }
              ]
          },
          {
              "featureType": "landscape",
              "elementType": "all",
              "stylers": [
                  {
                      "color": "#f2e5d4"
                  }
              ]
          },
          {
              "featureType": "poi.attraction",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#d81a1a"
                  }
              ]
          },
          {
              "featureType": "poi.park",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#c5dac6"
                  }
              ]
          },
          {
              "featureType": "poi.park",
              "elementType": "labels",
              "stylers": [
                  {
                      "visibility": "on"
                  },
                  {
                      "lightness": 20
                  }
              ]
          },
          {
              "featureType": "poi.school",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#e085a3"
                  },
                  {
                      "gamma": "2"
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "all",
              "stylers": [
                  {
                      "lightness": 20
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#c5c6c6"
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#c7a87f"
                  }
              ]
          },
          {
              "featureType": "road.arterial",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#e4d7c6"
                  }
              ]
          },
          {
              "featureType": "road.local",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#fbfaf7"
                  }
              ]
          },
          {
              "featureType": "transit.line",
              "elementType": "geometry",
              "stylers": [
                  {
                      "lightness": -48
                  },
                  {
                      "gamma": "1.52"
                  },
                  {
                      "saturation": -23
                  },
                  {
                      "color": "#a57878"
                  },
                  {
                      "weight": "0.8"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "on"
                  },
                  {
                      "color": "#acbcc9"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#6d8ec0"
                  }
              ]
          }
      ]
      });

      // style for auto complete results
      var card = document.getElementById('pac-card');
      var input = document.getElementById('pac-input');
      map.controls[google.maps.ControlPosition.TOP_LEFT].push(card);

      var autocomplete = new google.maps.places.Autocomplete(input);

      // Bind the map's bounds (viewport) property to the autocomplete object,
      // so that the autocomplete requests use the current map bounds for the
      // bounds option in the request.
      autocomplete.bindTo('bounds', map);

      var infowindow = new google.maps.InfoWindow();
      var infowindowContent = document.getElementById('infowindow-content');
      infowindow.setContent(infowindowContent);
      var marker = new google.maps.Marker({
        map: map,
        anchorPoint: new google.maps.Point(0, -29),
        icon:flagImg
      });
      // ON CLICK
      //
      // button.addListener('click',function(){
      //   // increment / decrement voting values
      //   votingStatus[0].voting+=1;
      //   console.log(votingStatus[0].voting);
      // })

      autocomplete.addListener('place_changed', function() {
        infowindow.close();
        // marker.setVisible(false);
        // NOTE: place JSON by autocomplete.getPlace();
        var place = autocomplete.getPlace();
        // console.log(JSON.stringify(place));
        if (!place.geometry) {
          // User entered the name of a Place that was not suggested and
          // pressed the Enter key, or the Place Details request failed.
          window.alert("No details available for input: '" + place.name + "'");
          return;
        }else{
          console.log(place.name);
          addPlace(listOfPlace,"Alex",place.name);
          addMarker(place);
          addToList(place);
        }


        // If the place has a geometry, then present it on a map.
        if (place.geometry.viewport) {
          map.fitBounds(place.geometry.viewport);
        } else {
          map.setCenter(place.geometry.location);
          map.setZoom(17);  // Why 17? Because it looks good.
        }
        marker.setPosition(place.geometry.location);
        // marker.setVisible(true);

        var address = '';
        if (place.address_components) {
          address = [
            (place.address_components[0] && place.address_components[0].short_name || ''),
            (place.address_components[1] && place.address_components[1].short_name || ''),
            (place.address_components[2] && place.address_components[2].short_name || '')
          ].join(' ');
        }

        infowindowContent.children['place-icon'].src = place.icon;
        infowindowContent.children['place-name'].textContent = place.name;
        infowindowContent.children['place-address'].textContent = address;
        infowindow.open(map, marker);
      });
    }
  },
  components: {
    'main-app': MainApp
  },
  template: '<main-app></main-app>'
});
