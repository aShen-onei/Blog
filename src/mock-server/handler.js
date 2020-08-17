/**
 * 处理的类
 */
export class ApiHandler {
  /**
   * api处理函数
   * @param {String} apiKey RESTful接口
   */
  constructor(apiKey) {
    this.key = apiKey;
  }

  /**
   * 分离apiKey的method和
   */
  splitApi(){
    let uri     = this.key.split(' ');
    if (uri.length < 2) { console.error('mock数据输出的api没有指明操作'); return;}
    let methods = uri[0]; // 操作
    let api     = uri[1]; // uri地址
    return { methods, api }
  }
}
