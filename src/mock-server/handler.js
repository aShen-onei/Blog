/**
 * 处理的类
 */
class ApiHandler {
  /**
   * api处理函数
   */
  constructor() {
  }

  /**
   * 分离操作和uri
   * @param {string} apiKey 操作和uri结合的字符串
   */
  splitApi(apiKey){
    let apis     = apiKey.split(' ');
    if (apis.length < 2) { console.error('mock数据输出的api不完整'); return;}
    let methods = apis[0]; // 操作
    let uri     = apis[1]; // uri地址
    return { methods, uri }
  }
}

module.exports = ApiHandler;