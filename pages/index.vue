<template>
  <div class="TheIndex">
    <div class="TheIndex_BlackBg" v-show="this.playlist_flag"></div>
    <v-lazy-image :src="news" alt="" class="TheIndex_Img TheIndex_Img-News"/>
    <a @click="ThePlaylist_Clicked">
      <v-lazy-image :src="camereon" alt="" class="TheIndex_Img TheIndex_Img-Camereon"/>
    </a>
    <v-lazy-image :src="tv" alt="" class="TheIndex_Img TheIndex_Img-Tv"/>
    <a href="https://asilis.theshop.jp/"  class="">
      <v-lazy-image :src="shop" alt="" class="TheIndex_Img TheIndex_Img-Shop"/>
    </a>
    <div class="ThePlaylist_Wrapper">
      <div class="ThePlaylist_CloseBtn" v-show="this.playlist_flag" @click="ThePlaylist_Closed"></div>
      <div class="TheIndex_Playlist_Countainer" v-show="this.playlist_flag">
        <iframe src="https://open.spotify.com/embed/album/6BpM79A5kpFetdC9lVRCJy" class="TheIndex_Playlist" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        <iframe src="https://open.spotify.com/embed/artist/0EpMZDmiigjzkNNNBF3Hbp" class="TheIndex_Playlist" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        <iframe src="https://open.spotify.com/embed/artist/2CjSAJqzNhKwUeen9d0d0D" class="TheIndex_Playlist" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import { TweenMax, Elastic, Expo, Back } from "gsap";
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
      x_value: 0,
      y_value: 0,
      z_value: 0,
      playlist_flag: false,
    }
  },
  mounted() {
  
  },
  methods: {
    ThePlaylist_Clicked(){
      this.$store.commit("playlist/click");
      this.playlist_flag = true
    },
    ThePlaylist_Closed(){
      this.$store.commit("playlist/close");
      this.playlist_flag = false
    },
  },
  computed: {
    ...mapGetters({
      clicked: 'playlist/clicked',
    })
  },
  watch: {
    // async clicked(val) {
    //   console.log('hoge')
    //   requestAnimationFrame(() => {
    //     TweenMax.to(
    //       ".TheIndex_BlackBg",
    //       {
    //         opacity: 1,
    //         ease: Expo.easeIn,
    //       },
    //       0.4
    //     );
    //   });
    //   await this.$delay(500);
    // }
  }
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
  left: 0;
  height: 40%;
  transform:rotate(10deg);
  /* width: 60%; */
}

.TheIndex_BlackBg{
  /* opacity: 0; */
  transition: 0.2s;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(1px);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 15;
}
.ThePlaylist_Wrapper{
  display: flex;
  flex-wrap: wrap;
  position: fixed;
  bottom: 20px;
  left: 0;
  z-index: 20;
  width: 100%;
}
.ThePlaylist_CloseBtn{
  width: 28px;
  height: 28px;
  margin-left: 24px;
  margin-bottom: 12px;
  /* background: red; */
  background-image: 
  linear-gradient(-45deg, 
    transparent calc(50% - 1px), #fff calc(50% - 1px), 
    #fff calc(50% + 1px), transparent calc(50% + 1px)
  ), 
  linear-gradient(45deg, 
    transparent calc(50% - 1px), #fff calc(50% - 1px), 
    #fff calc(50% + 1px), transparent calc(50% + 1px)
  );
}
.TheIndex_Playlist_Countainer{
  padding-left: 12px;
  padding-right: 12px;
  /* f */
  display: flex;
  /* justify-content: space-between; */
  overflow-x: scroll;
  /* overflow-y: visible; */
}

.TheIndex_Playlist{
  width: 240px;
  height: 200px;
  margin-right: 24px;
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



.ThePlaylist_Wrapper{
  display: flex;
  flex-wrap: wrap;
  position: fixed;
  bottom: 20px;
  left: 0;
  z-index: 20;
  width: 100%;
}
.ThePlaylist_CloseBtn{
  width: 28px;
  height: 28px;
  margin-left: 24px;
  margin-bottom: 12px;
  /* background: red; */
  background-image: 
  linear-gradient(-45deg, 
    transparent calc(50% - 1px), #fff calc(50% - 1px), 
    #fff calc(50% + 1px), transparent calc(50% + 1px)
  ), 
  linear-gradient(45deg, 
    transparent calc(50% - 1px), #fff calc(50% - 1px), 
    #fff calc(50% + 1px), transparent calc(50% + 1px)
  );
}
.TheIndex_Playlist_Countainer{
  padding-left: 12px;
  padding-right: 12px;
  /* f */
  display: flex;
  /* justify-content: space-between; */
  overflow-x: scroll;
  /* overflow-y: visible; */
}

.TheIndex_Playlist{
  width: 320px;
  height: 280px;
  margin-right: 24px;
}

}
</style>
