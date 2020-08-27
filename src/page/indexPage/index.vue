<template>
    <div class="parallax-container">
        <button @click="goHome" class="href">home</button>
        <div id="parallax-scene" class="parallax-scene">
          <div data-depth="0.4" class="layer">
            <div class="background-image"></div>
          </div>
        </div>
        <div class="sakura-scene" id="sakura"></div>
    </div>
</template>

<script>
  import parallax from 'parallax-js';
  import Sakura from '../../util/sakura.js'
  const WINDOW_WIDTH  = window.innerWidth; // 窗口的宽度
  const WINDOW_HEIGHT = window.innerHeight; // 窗口的高度
  export default {
    name: "app",
    data() {
      return {
        canvasWidth  : window.innerWidth,
        canvasHeight : window.innerHeight - 50,
      }
    },
    created() {
    },
    mounted() {
      this.intParallax(); // 初始化视差
      this.initSakura(); // 初始化樱花效果
    },
    methods: {
      goHome() { // 去往主页
        console.log('换了时光开始辣~')
        this.$router.push('home')
      },
      /**
       * 初始化视差插件
       */
      intParallax() {
        let { x, y }    = {x: WINDOW_WIDTH / 2, y: WINDOW_HEIGHT / 2};
        let scene       = document.getElementById('parallax-scene');
        let parallaxInt = new parallax(scene);
      },
      /**
       * 初始化樱花
       */
      initSakura() {
        let element = document.getElementById('sakura');
        let sakura = new Sakura(element);
        sakura.initSakura();
        sakura.runAnime();
      }
    }
  }
</script>

<style lang="scss" scoped>
    .href{
    position: absolute;
    display: none;
    }
    .parallax-container {
      position: absolute;
      overflow: hidden;
      display: table;
      height: 100%;
      width: 100%;
      left: 0;
      top: 0;

      .parallax-scene, .layer {
        // display: none;
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        .background-image {
          background: url('/static/DarkSide.jpg') no-repeat 100% 100%;
          background-size: cover;
          background-position: center center;
          position: absolute;
          width: 110%;
          height: 110%;
          left: -5%;
          top: -5%;
          bottom: -5%;
        }
      }
      .sakura-scene {
        position: absolute;
        width: 100%;
        height: 100%;
      }
    }
</style>