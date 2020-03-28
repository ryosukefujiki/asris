<template>
  <div class="TheIndex">
    <v-lazy-image :src="news" alt="" class="TheIndex_Img TheIndex_Img-News"/>
    <v-lazy-image :src="camereon" alt="" class="TheIndex_Img TheIndex_Img-Camereon"/>
    <v-lazy-image :src="tv" alt="" class="TheIndex_Img TheIndex_Img-Tv"/>
    <a href="https://asilis.theshop.jp/"  class="">
      <v-lazy-image :src="shop" alt="" class="TheIndex_Img TheIndex_Img-Shop"/>
    </a>
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
  background: black;
  background: url("/bg.png");
  background-size: cover;
  background-position: center;
}
.TheIndex_Img-News{
  position: fixed;
  top: 5%;
  right: 20%;
  height: 30%;
  /* width: 50%; */
}
.TheIndex_Img-Camereon{
  position: fixed;
  top: 30%;
  right: 0;
  height: 30%;
  /* width: 40%; */
}
.TheIndex_Img-Shop{
  position: fixed;
  bottom: 0;
  right: 0;
  height: 36%;
  transform:rotate(-5deg);
  /* width: 75%; */
}
.TheIndex_Img-Tv{
  position: fixed;
  top: 36%;
  left: -10%;
  height: 40%;
  transform:rotate(10deg);
  /* width: 60%; */
}

@media screen and (min-width: 481px){

}
@media screen and (min-width: 769px){
.TheIndex_Img-News{
  position: fixed;
  top: 2%;
  left: 30%;
  height: 44%;
  /* width: 50%; */
}
.TheIndex_Img-Camereon{
  position: fixed;
  top: -15%;
  right: 0;
  height: 64%;
  /* transform:rotate(-45deg); */
  /* width: 40%; */
}
.TheIndex_Img-Shop{
  position: fixed;
  bottom: 0;
  right: 14%;
  height: 52%;
  transform:rotate(-5deg);
  /* width: 75%; */
}
.TheIndex_Img-Tv{
  position: fixed;
  top: 40%;
  left: 0;
  height: 72%;
  transform:rotate(10deg);
  /* width: 60%; */
}
}
</style>
