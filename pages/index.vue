<template>
  <div class="TheIndex">
    <v-lazy-image :src="news" alt="" class="TheIndex_Img TheIndex_Img-News"/>
    <v-lazy-image :src="camereon" alt="" class="TheIndex_Img TheIndex_Img-Camereon"/>
    <v-lazy-image :src="tv" alt="" class="TheIndex_Img TheIndex_Img-Tv"/>
    <v-lazy-image :src="shop" alt="" class="TheIndex_Img TheIndex_Img-Shop"/>
  </div>
</template>

<script>

import VLazyImage from "v-lazy-image"
import Logo from '~/components/Logo.vue'

export default {
  components: {
    VLazyImage
  },
  data() {
    return {
      camereon: "/camereon.png",
      news: "/news.png",
      shop: "/shop.png",
      tv: "/tv.png",
    }
  },
}
</script>

<style>
.TheIndex {
  width: 100%;
  height: 100%;
  /* background: red; */
  background: url("/bg.png");
  background-size: cover;
  background-position: center;
}
.TheIndex_Img-News{
  position: fixed;
  top: 10%;
  right: 20%;
  width: 160px;
}
.TheIndex_Img-Camereon{
  position: fixed;
  top: 30%;
  right: 0;
  width: 160px;
}
.TheIndex_Img-Shop{
  position: fixed;
  bottom: 0;
  right: 0;
  width: 280px;
}
.TheIndex_Img-Tv{
  position: fixed;
  top: 36%;
  left: -10%;
  width: 220px;
}
</style>
