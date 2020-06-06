<template>
  <section class="TheNews_Detail">
    <img :src="post.fields.newsHeader.fields.file.url" class="TheNews_Detail_Img" />
    <div class="TheNews_Detail_Content">
      <h1 class="TheNews_Card_Detail_Text TheNews_Detail_Header">{{ post.fields.newsTitle }}</h1>
      <p v-text="formatDate(post.fields.newsDate)" class="TheNews_Card_Text TheNews_Card_Date"/>
      <!-- <div class="TheNews_Card_Text_Box">
          <p class="TheNews_Card_Text TheNews_Card_Category">NEWS</p>
      </div> -->
      <div v-html="toHtmlString(post.fields.newsBody)" class="TheNews_Card_Detail_Text"></div>
    </div>
  </section>
</template>
<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import client from '~/plugins/contentful'

export default {
  async asyncData({ params, payload }) {
    // IDをキーに記事を取得
    const entry = await client.getEntry(params.id)
    return {
      post: entry
    }
  },
  methods: {
    formatDate(date) {
      return date.split('T')[0].split('-').map(Number).join('/');
    },
    toHtmlString(obj) {
      return documentToHtmlString(obj)
    }
  },
  head: {
    bodyAttrs: {
      class: 'body_news_detail'
    }
  },
}
</script>

<style>
.TheNews_Detail {
  width: 100%;
}
.TheNews_Detail_Img{
  width: 100%;
  height: 240px;
  object-fit: cover;
}
.TheNews_Card_Detail_Text{
  margin-top: 12px;
  color: #272727;
  font-size: 16px;
  line-height: 32px;
  font-family: "游明朝", YuMincho, "Hiragino Mincho ProN W3", "ヒラギノ明朝 ProN W3", "Hiragino Mincho ProN", "HG明朝E", "ＭＳ Ｐ明朝", "ＭＳ 明朝", serif;
}
.TheNews_Detail_Header{
  font-weight: normal;
  font-size: 20px;
}
.TheNews_Detail_Content{
  padding: 20px 20px;
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
@media screen and (min-width: 769px){
.TheNews_Detail_Img{
  width: 100%;
  height: 400px;
  object-fit: cover;
}
.TheNews_Detail_Content{
  width: 960px;
  margin: 0 auto;
}
}

</style>