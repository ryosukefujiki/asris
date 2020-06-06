<template>
  <div class="TheMusic">
    <h1 class="TheIndex_Heading">MUSIC</h1>
    <div class="ThePlaylist_Wrapper">
      <div class="TheMusic_Playlist_Countainer">
        <iframe src="https://open.spotify.com/embed/album/6BpM79A5kpFetdC9lVRCJy" class="TheMusic_Playlist" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        <iframe src="https://open.spotify.com/embed/artist/0EpMZDmiigjzkNNNBF3Hbp" class="TheMusic_Playlist" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        <iframe src="https://open.spotify.com/embed/artist/2CjSAJqzNhKwUeen9d0d0D" class="TheMusic_Playlist" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
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
  head: {
    bodyAttrs: {
      class: 'body_music'
    }
  },
  data() {
    return {
      
    }
  },
  mounted() {

  },
  methods: {
   
  },
  computed: {
   
  },
  watch: {
   
  }
}
</script>

<style>
/* body{
  background-color: rgba(0,0,0,0.2);
  background-image: url("/music.png");
  background-size: cover;
  background-position: right;
  background-blend-mode: multiply;
  background-attachment: fixed

} */
.TheMusic {
  width: 100%;
  /* background-color: rgba(0,0,0,0.2); */
  /* background-image: url("/music.png");
  background-size: cover;
  background-position: right;
  background-blend-mode: multiply; */
  padding: 20% 20px;
}


.TheIndex_Text{
  font-family: 'Playfair Display', serif;
  color: #ffffff;
  font-size: 20px;
  letter-spacing: 4px;
}
.TheIndex_Text_Small{
  font-size: 14px;
}
.TheIndex_Heading{
  font-family: 'Playfair Display', serif;
  color: #ffffff;
  font-size: 32px;
  z-index: 5;
  letter-spacing: 4px;
   margin-bottom: 12px;
}
.TheMusic_Playlist{
  width: 100%;
  height: 200px;
  margin-bottom: 24px;
}
@media screen and (min-width: 769px){
  .TheMusic {
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.2);
  background-image: url("/music.png");
  background-size: cover;
  background-position: right;
  background-blend-mode: multiply;
  padding: 20% 20px;
}
}
</style>
