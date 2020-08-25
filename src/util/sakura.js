/**
 * sakura particular system 樱花粒子系统
 */

 import * as THREE from 'three';
 import Engine from './baseThree';
 let typeNum = 2; // 种类
 let range   = 50; // 同屏数量
 class Sakura {
   constructor(element) {
    this.Engine = new Engine(element);
   }
   // 初始化材质
   initTexture() {
     // 加载纹理
     let texture   = new THREE.TextureLoader().load('https://img-blog.csdnimg.cn/20190211172751113.png');
     // 使用图片纹理材质
     this.materials = []
     for(let i = 0; i < typeNum; i++ ){
       let material = new THREE.PointsMaterial({
         size: 2,
         map: texture,
         transparent: true,
         opacity: 1,
         depthTest: false,
         blending: THREE.AdditiveBlending // 融合模式
       });
       material.map.offset = new THREE.Vector2(1/typeNum * i, 0);
       material.map.repeat = new THREE.Vector2(1/typeNum, 1);
       this.materials.push(material); // 假如图片材质
     }
   }
   // 初始化物体
   initGeo() {
     this.geos  = [];
     for (let i = 0; i < typeNum; i++ ) {
       let geo  = new THREE.Geometry();
       for (let k = 0; k < 100; k++) {
         let v = new THREE.Vector3(
           Math.random() * range - range/2,
           Math.random() * range - range/2,
           Math.random() * range - range/2
         )
         // 移动速度
         v.velocityY = 0.1 + Math.random() / 5;
         v.velocityX = (Math.random() - 0.5) / 3;
         v.velocityZ = (Math.random() - 0.5) / 3;
         // 添加顶点
         geo.vertices.push(v);
        }
         this.geos.push(geo);
     }
   }
   // 初始化樱花
   initSakura() {
     this.Engine.init();
     this.initTexture();
     this.initGeo();
     this.cloudPoints = [];
     for (let i = 0; i < typeNum; i++) {
       let point = new THREE.Points(this.geos[i], this.materials[i]);
       this.cloudPoints.push(point);
       this.Engine.addScene(point);
     }
   }
   // 动画循环
   runAnime() {
     this.cloudPoints.forEach((point, i) => {
       let vertices = point.geometry.vertices;
       vertices.forEach((v, idx) => {
         v.y = v.y - (v.velocityY);
         v.x = v.x - (v.velocityX);
         v.z = v.z - (v.velocityZ);

         // 边界检查
       })
       point.geometry.verticesNeedUpdate = true;
     })
     this.Engine.render.render(this.Engine.scene, this.Engine.camera);
     requestAnimationFrame(this.runAnime);
   }
 }