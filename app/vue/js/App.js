import CheckIn from '../components/CheckIn.vue';

const Map = {
  template: `<div>User {{ $route.params.id }}</div>`
}

export default {
  data () {
    return {
      center: {lat: 10.0, lng: 10.0},
      markers: [{
        position: {lat: 10.0, lng: 10.0}
      }, {
        position: {lat: 11.0, lng: 11.0}
      }]
    }
  },
  mounted() {
    this.initMap()
  },
  methods: {
    setDescription(description) {
      this.description = description;
    },
    setPlace(place) {
      this.place = place
    },
    usePlace(place) {
      if (this.place) {
        this.markers.push({
          position: {
            lat: this.place.geometry.location.lat(),
            lng: this.place.geometry.location.lng(),
          }
        })
        this.place = null;
      }
    },
    initMap() {
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
      })
    }
  }
}
