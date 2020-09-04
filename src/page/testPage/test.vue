<template>
  <div id="container">
    <div class="image">
      <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599213719225&di=317fdeaf173bf5776b1e48d582ebfba5&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F8b15b2b4a82b07d0eaec786e0b0193b5db9bb0f819802-DYQdv1_fw658" alt="Hello World" />
      <em></em>
    </div>
  </div>  
</template>
<script>
export default {
  
}
</script>
<style scoped>
.image {
  position: relative;
  overflow:hidden;
  width: 300px;
  height: 450px;
}
img {
  width:300px;
  height: 450px;
}

em {
  position: absolute;
  display:block;
  width: 200px;
  height: 450px;
  background:#fff;
  top: 0;
  left: -400px;
  translate: skewY(25deg);
  -moz-transform: skewX(-25deg);
  -ms-transform: skewX(-25deg);
  -o-transform: skewX(-25deg);
  transform: skewX(-25deg);
  background:linear-gradient(0deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0));
  -moz-linear-gradient:(0deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0));
  -webkit-linear-gradient:(0deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0));
  -o-linear-gradient:(0deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0));
}
.image:hover em {
  left:400px;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
 }
</style>