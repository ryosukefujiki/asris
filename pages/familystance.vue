<template>
  <div class="TheFamily">
    <h1 class="TheIndex_Heading">FAMILY STANCE</h1>
    <a target="_blank" href="https://www.perimetron.jp/" class="TheDetail_Text">
      PERIMETRON
    </a>
    <a target="_blank" href="https://www.dirtyworkersstudio.com/" class="TheDetail_Text">
      DWS
    </a>
    <a target="_blank" href="http://www.margtstudio.com/" class="TheDetail_Text">
      Margt
    </a>
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
      class: 'body_familystance'
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
.TheFamily {
   width: 100%;
  height: 100%;
  /* background-color: rgba(0,0,0,0.2);
  background-image: url("/familystance.png");
  background-size: cover;
  background-position: center;
  background-blend-mode: multiply; */
  padding: 20% 20px;
}


.TheDetail_Text{
  font-family: 'Playfair Display', serif;
  color: #ffffff;
  font-size: 20px;
  letter-spacing: 4px;
  display: block;
  margin-bottom: 24px;
}
.TheDetail_Text_Small{
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
@media screen and (min-width: 769px){
.TheFamily {
  width: 960px;
  height: 100%;
  padding: 120px 0px;
  margin: 0 auto;
}
}

</style>
