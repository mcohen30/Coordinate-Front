<style lang="sass">

  @import "../style/main.scss";

  h1 {
    text-align: center;
  }

  .love {

    width: 500px;
    margin: 40px auto;
    line-height: 32px;
    font-size: 48px;
    text-align: center;
    vertical-align: text-top;
    color: #e0e0e0;

    img {
      margin: 0px 20px;
    }

    .heart {
      margin: 0px 20px;
      color: #ff6060;
      display: inline-block;
    }

  }

  .router-links {
    display: flex;
    font-size: $link-font-size;
    justify-content: space-around;
  }

</style>

<template>
  <div>
    <!-- <hr>
      <div class="router-links">
        <router-link to="/">Create Page</router-link>
        <router-link to="/app">App Page</router-link>
      </div>
    <hr> -->
    <router-view class="view"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      brand: 'cOOrdinate',
    }
  }
}
</script>
