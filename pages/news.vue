<template>
  <div class="TheNews">
    <h1 class="TheIndex_Heading">NEWS</h1>
    <p class="TheIndex_Text">COMING SOON.</p>
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
.TheNews {
   width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.2);
  background-image: url("/news.png");
  background-size: cover;
  background-position: right;
  background-blend-mode: multiply;
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
}

</style>
