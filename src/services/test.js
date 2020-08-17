/**
 * 测试接口
 */
import request from '../util/request.js'

export async function testServer() {
  return request('/api/test');
}