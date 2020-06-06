<template>
  <div class="TheNews">
    <h1 class="TheIndex_Heading">NEWS</h1>
    <template v-if="posts.length">
      <div v-for="(post, i) in posts" :key="i">
        <nuxt-link :to="`/news/${post.sys.id}`" class="TheNews_Card_Link">
            <article class="TheNews_Card">
                <p class="TheNews_Card_Text TheNews_Card_Category">NEWS</p>
                <h2 class="TheNews_Card_Text TheNews_Card_Title">{{ post.fields.newsTitle }}</h2>
                <!-- <p class="card_text">{{ id }}</p> -->
                <div class="TheNews_Card_Text_Box">
                     <p v-text="formatDate(post.fields.newsDate)" class="TheNews_Card_Text TheNews_Card_Date"/>
                    <p class="TheNews_Card_Text TheNews_Cart_LinkDummy">詳細はこちらから</p>
                </div>
            </article>
        </nuxt-link>
      </div>
    </template>
    <template v-else>
      <p class="TheIndex_Text">COMING SOON.</p>
    </template>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import { TweenMax, Elastic, Expo, Back } from "gsap";
import VLazyImage from "v-lazy-image"
import Logo from '~/components/Logo.vue'

import client from '~/plugins/contentful'

export default {
  components: {
  },
  async asyncData({ env }) {
    let posts = []
    await client.getEntries({
      content_type: env.CTF_BLOG_POST_TYPE_ID,
      order: '-fields.newsDate'
    }).then(res => (posts = res.items)).catch(console.error)
    return { posts }
  },
  data() {
    return {
      
    }
  },
  head: {
    bodyAttrs: {
      class: 'body_news'
    }
  },
  mounted() {

  },
  methods: {
    formatDate(date) {
      return date.split('T')[0].split('-').map(Number).join('/');
    },
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

.TheNews_Card{
  width: 100%;
  background: white;
  margin-bottom: 12px;
  padding: 12px;
  border-radius: 2px;
}
.TheNews_Card_Text{
  color: #272727;
  font-family: "游明朝", YuMincho, "Hiragino Mincho ProN W3", "ヒラギノ明朝 ProN W3", "Hiragino Mincho ProN", "HG明朝E", "ＭＳ Ｐ明朝", "ＭＳ 明朝", serif;
}
.TheNews_Card_Category{
    background: #000000;
    padding: 4px;
    color: #ffffff;
    display: inline-block;
    font-size: 14px;
    margin-bottom: 8px;
}
.TheNews_Card_Title{
  background: white;
  font-weight: normal;
  font-size: 18px;
}
.TheNews_Card_Text_Box{
    display: flex;
    justify-content: space-between;
}
.TheNews_Card_Link{
    text-decoration: none;
}
.TheNews_Cart_LinkDummy{
  font-size: 14px;
  text-align: left;
  margin-top: 4px;
  text-decoration: underline;
}

</style>
