<template>
  <div class="TheIndex">
    <div class="TheIndex_ColumnUpper_Box">
      <div class="TheIndex_ColumnUpper_Left">
        <nuxt-link to="/news" class="TheIndex_Column TheIndex_Column_01">
          <h2 class="TheIndex_Text Text_Left">NEWS</h2>
        </nuxt-link>
        <nuxt-link to="/videos" class="TheIndex_Column TheIndex_Column_02">
          <h2 class="TheIndex_Text Text_Right">VIDEOS</h2>
        </nuxt-link>
         <nuxt-link to="/music" class="TheIndex_Column TheIndex_Column_03">
          <h2 class="TheIndex_Text Text_Left">MUSIC</h2>
        </nuxt-link>
      </div>
      <a href="https://restless-fog-190.stores.jp/" target="_blank" class="TheIndex_Column TheIndex_Column_04">
        <h2 class="TheIndex_Text">ONLINE<br>STORE</h2>
      </a>
    </div>
    
     <div class="TheIndex_ColumnBottom_Box">
      <div class="TheIndex_ColumnBottom_Left">
        <nuxt-link to="/playlist" class="TheIndex_Column TheIndex_Column_05">
          <h2 class="TheIndex_Text TheIndex_Text_Small">PLAYLIST<br>&<br>PHOTO</h2>
        </nuxt-link>
         <nuxt-link to="/crew" class="TheIndex_Column TheIndex_Column_06">
          <h2 class="TheIndex_Text TheIndex_Text_Small">CREW</h2>
        </nuxt-link>
      </div>
     <nuxt-link to="/familystance" class="TheIndex_Column TheIndex_Column_07">
          <h2 class="TheIndex_Text TheIndex_Text_Small">FAMILY<br>STANCE</h2>
        </nuxt-link>
     <nuxt-link to="/live" class="TheIndex_Column TheIndex_Column_08">
          <h2 class="TheIndex_Text TheIndex_Text_Small">LIVE</h2>
        </nuxt-link>
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
  /* background: black;
  background: url("/bg.png");
  background-size: cover;
  background-position: center; */
  padding: 20% 20px;
}

.TheIndex_Text{
  font-family: 'Playfair Display', serif;
  color: #ffffff;
  font-size: 20px;
  letter-spacing: 4px;
  display: none;
}
.TheIndex_Text_Small{
  font-size: 14px;
}



.TheIndex_ColumnUpper_Box{
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 60%;
  /* background: black; */
}
.TheIndex_ColumnUpper_Left{
  width: 55%;
  height: 100%;
  align-items: flex-end;
}
.TheIndex_Column_04{
  width: 40%;
  height: 100%;
  background: url("/onlinestore_sp.png");
  background-size: cover;
  border: 2px solid #000323;
  background-position: center;
}
.TheIndex_Column_01{
  width: 100%;
  height: 30%;
  background: url("/news_sp.png");
  background-size: cover;
  border: 2px solid #000323;
  background-position: left;
}
.TheIndex_Column_02{
  width: 100%;
  height: 30%;
  background: url("/video_sp.png");
  background-size: cover;
  margin-top: 4%;
  border: 2px solid #000323;
  background-position: right;
}
.TheIndex_Column_03{
  width: 100%;
  height: 30%;
  background: url("/music_sp.png");
  background-size: cover;
  margin-top: 4%;
  border: 2px solid #000323;
  background-position: left;
}

.TheIndex_ColumnBottom_Box{
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 40%;
  margin-top: 20px;
}
.TheIndex_ColumnBottom_Left{
  width: 40%;
  height: 100%;
}
.TheIndex_Column_05{
  width: 100%;
  height: 60%;
  background: url("/playlists_sp.png");
  background-size: cover;
  border: 2px solid #000323;
  background-position: center;
}
.TheIndex_Column_06{
  width: 100%;
  height: 30%;
  background: url("/crew_sp.png");
  background-size: cover;
  margin-top: 20px;
  border: 2px solid #000323;
  background-position: center;
}
.TheIndex_Column_07{
  width: 30%;
  height: 100%;
  background: url("/familystance_sp.png");
  background-size: cover;
  border: 2px solid #000323;
  background-position: center;
}
.TheIndex_Column_08{
  width: 25%;
  height: 100%;
  background: url("/live_sp.png");
  background-size: cover;
  background-position: center;
  border: 2px solid #000323;
}

.TheIndex_Column{
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}


@media screen and (min-width: 481px){

}
@media screen and (min-width: 769px){
.TheIndex {
  width: 100%;
  height: 100%;
  background: black;
  background: url("/bg.png");
  background-size: cover;
  background-position: center;
  padding: 40px 20px;
  padding-top: 120px;
}
.TheIndex_ColumnUpper_Box{
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 60%;
  /* background: black; */
}
.TheIndex_ColumnBottom_Box{
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 35%;
  /* background: black; */
}
.TheIndex_ColumnUpper_Left{
  width: 45%;
  height: 100%;
  align-items: flex-end;
}
.TheIndex_Column_04{
  width: 54%;
  height: 100%;
  background: url("/onlinestore.png");
  background-size: cover;
  border: 2px solid #000323;
  background-position: left;
}
.TheIndex_Column_01{
  width: 100%;
  height: 30%;
  background: url("/news.png");
  background-size: cover;
  border: 2px solid #000323;
  background-position: center;
}
.TheIndex_Column_02{
  width: 100%;
  height: 30%;
  background: url("/video.png");
  background-size: cover;
  margin-top: 2%;
  border: 2px solid #000323;
  background-position: right;
}
.TheIndex_Column_03{
  width: 100%;
  height: 30%;
  background: url("/music.png");
  background-size: cover;
  margin-top: 2%;
  border: 2px solid #000323;
  background-position: center;
}

.TheIndex_Text{
  font-family: 'Playfair Display', serif;
  color: #ffffff;
  font-size: 24px !important;
  letter-spacing: 4px;
  display: block;
}
.TheIndex_Text_Small{
  font-size: 24px !important;
}

.TheIndex_Column_05{
  width: 100%;
  height: 60%;
  background: url("/playlists.png");
  background-size: cover;
  border: 2px solid #000323;
  background-position: center;
}
.TheIndex_Column_06{
  width: 100%;
  height: 30%;
  background: url("/crew.png");
  background-size: cover;
  margin-top: 20px;
  border: 2px solid #000323;
  background-position: center;
}
.TheIndex_Column_07{
  width: 30%;
  height: 100%;
  background: url("/familystance.png");
  background-size: cover;
  border: 2px solid #000323;
  background-position: center;
}


}
</style>
