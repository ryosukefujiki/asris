<template>
  <div class="default">
    <nuxt />
  </div>
</template>

<script>
export default {
  mounted() {
    if (window.navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/i)) {
      // console.log("sp");
    }
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.indexOf("msie") != -1 || userAgent.indexOf("trident") != -1) {
      // console.log('Internet Explorerをお使いですね');
      // this.$router.replace({ path: "sorry" });
      alert('申し訳ございません。現在お使いいただいているブラウザに対応がまだ行われておりません。Google Chromeをお使いください。')
    } else if (userAgent.indexOf("edge") != -1) {
      // console.log('Edgeをお使いですね');
      // alert('申し訳ございません。現在お使いいただいているブラウザに対応がまだ行われておりません。Google Chromeをお使いください。')
    } else if (userAgent.indexOf("chrome") != -1) {
      // console.log('Google Chromeをお使いですね');
    } else if (userAgent.indexOf("safari") != -1) {
      // console.log('Safariをお使いですね');
      // alert('申し訳ございません。現在お使いいただいているブラウザに対応がまだ行われておりません。Google Chromeをお使いください。')
    } else if (userAgent.indexOf("firefox") != -1) {
      // console.log('FireFoxをお使いですね');
      // alert('申し訳ございません。現在お使いいただいているブラウザに対応がまだ行われておりません。Google Chromeをお使いください。')
    } else if (userAgent.indexOf("opera") != -1) {
      // console.log('Operaをお使いですね');
      alert('申し訳ございません。現在お使いいただいているブラウザに対応がまだ行われておりません。Google Chromeをお使いください。')
    } else {
      // console.log('そんなブラウザは知らん');
    }
  },
  components: {
  },
  data() {
    return {

    };
  },
}
</script>


<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

html,body, #__nuxt, #__layout, .default{
  width: 100%;
  height: 100%;
  background: black;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
