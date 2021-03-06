/**
 * 基础的THREEJS配置
 */
import * as THREE from 'three';

class Engine {
  constructor(element){
    this.element = element; // 画布元素
  }

  // 初始化render
  intRender() { 
    this.render = new THREE.WebGLRenderer({antialias: true, alpha: true});
    this.render.setClearAlpha(0.0);
    this.render.setSize(window.innerWidth, window.innerHeight); // 设置大小
    this.element.appendChild(this.render.domElement); // 挂载dom节点
  }

  // 初始化场景
  initScene() { this.scene = new THREE.Scene(); }
  // 初始化相机
  initCamera() {
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 5, 500);
    this.camera.position.set(0, 0, 40);
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));
  }
  // 初始化坐标 
  initAxier() { this.Axier = new THREE.AxesHelper(500); }
  // 添加场景
  addScene(thing) {
    this.scene.add(thing);
  }

  init() {
    this.intRender();
    this.initScene();
    this.initCamera();
    // this.initAxier();
    // this.addScene(this.Axier);
    this.addScene(this.camera);
  }
}

export default Engine;