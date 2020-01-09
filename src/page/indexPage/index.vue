<template>
    <div>
        <button @click="goHome" class="href">home</button>
        <canvas id="canvas-frame" :width="canvasWidth" :height="canvasHeight"></canvas>
        <div class="ui-box">
            <div>x阻尼：
                <input @keyup.enter="enterEventX" @blur="enterEventX">
            </div>
            <div>y阻尼：
                <input @keyup.enter="enterEventY" @blur="enterEventY">
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "app",
    data() {
      return {
        canvasWidth  : window.innerWidth,
        canvasHeight : window.innerHeight - 50,
        dampingX: 0, //x 轴阻尼
        dampingY: 0, //y 轴阻尼
      }
    },
    created() {
    },
    mounted() {
      this.initCanvas();
    },
    methods: {
      goHome() { // 去往主页
        this.$router.push('home')
      },
      initCanvas() { // 初始化画布
        let canvas = document.getElementById('canvas-frame');
        let ctx    = canvas.getContext('2d');
        let img    = new Image();
        img.src    = '../font/back.jpg';
        let dx     = -(1440 - this.canvasHeight) / 2;
        let dy     = -(2560 - this.canvasWidth) / 2;
        let lastX  = 0;
        let lastY  = 0;
        let init   = false;
        const that = this;
        img.onload = function() {
          canvas.onmousemove = function(e) {
            if (!init) {
              lastX = e.x;
              lastY = e.y;
              ctx.clearRect(0, 0, that.canvasWidth, that.canvasHeight);
              ctx.drawImage(img, dx, dy);
              init = true;
            }
            let directionX = e.x - lastX;
            let directionY = e.y - lastY;
            lastX          = e.x;
            lastY          = e.y;
            // ←
            if(directionX > 0)
            let offsetX = e.offsetX;
            let offsetY = e.offsetY;
            ctx.clearRect(0, 0, that.canvasWidth, that.canvasHeight);
            ctx.drawImage(img, dx, dy);
          }
        }
      },
      enterEventX(e) {
        this.dampingX = e.target.value;
      },
      enterEventY(e) {
        this.dampingY = e.target.value;
      }
    }
  }
</script>

<style lang="scss" scoped>
    .href{
    position: absolute;
}
    #canvas-frame {
        overflow: hidden;
    }
    .ui-box{
        position: absolute;
        right: 0px;
        top: 0px;
        background: #dddddd;
    }
</style>