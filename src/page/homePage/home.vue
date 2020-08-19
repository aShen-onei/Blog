<template>
    <div class="gui">
        <div class="gui-header">
            <h-component></h-component>
        </div>
        <div style="height: 1000px">
          <el-button @click="testMock">点击测试mock数据</el-button>
          <el-button @click="getSong">点击测试</el-button>
        </div>
        <div class="gui-footer">
            <f-component></f-component>
        </div>
    </div>
</template>

<script>
  import HComponent from './components/header.vue'
  import FComponent from './components/footer.vue'
  import { testServer, getSongData } from '../../services/test.js'
  import live2d from 'live2d-widget'
  import path from 'path'
  export default {
    name: "home",
    components: {
      HComponent,
      FComponent
    },
    created(){
      this.initLive2d(); // 初始化live2d
    },
    methods: {
      /**
       * 初始化live2d
       */
      initLive2d() {
        live2d.L2Dwidget.init({
          "model": {
            "jsonPath": "https://unpkg.com/live2d-widget-model-sagiri@1.0.0/assets/sagiri.model.json",
            "scale": 1
          },
          "display": {
              "position": "right",
              "width": 150,
              "height": 300,
              "hOffset": 0,
              "vOffset": -20
          },
          "mobile": {
              "show": true,
              "scale": 0.5
          },
          "react": {
              "opacityDefault": 0.7,
              "opacityOnHover": 0.2
          },
          "dialog": {
            "enable": true,
            "hitokoto": true
          }
        })
      },
      testMock() {
        console.log('测试------------');
        testServer();
      },
      getSong() {
        getSongData();
      }
    }
  }
</script>

<style lang="scss" scoped>
.gui {
    position: relative;
    .gui-header {
        height: 55px;
        width: 100%;
    }
    .gui-main {

    }
    .gui-footer {
        position: relative;
    }
}
</style>