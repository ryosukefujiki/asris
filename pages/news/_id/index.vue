<template>
  <section class="TheNews_Detail">
    <h1 class="TheNews_Card_Detail_Text TheNews_Detail_Header">{{ post.fields.newsTitle }}</h1>
    <v-row>
      <v-col>
        <div v-html="toHtmlString(post.fields.newsBody)" class="TheNews_Card_Detail_Text"></div>
      </v-col>
    </v-row>
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
  height: 100%;
  padding: 20% 20px;
}
.TheNews_Card_Detail_Text{
  color: #272727;
  font-size: 18px;
  line-height: 36px;
  font-family: "游明朝", YuMincho, "Hiragino Mincho ProN W3", "ヒラギノ明朝 ProN W3", "Hiragino Mincho ProN", "HG明朝E", "ＭＳ Ｐ明朝", "ＭＳ 明朝", serif;
}
.TheNews_Detail_Header{
  font-weight: normal;
  font-size: 24px;
}
</style>