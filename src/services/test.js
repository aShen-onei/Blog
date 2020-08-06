/**
 * 测试接口
 */
import request from '../util/request.js'

export async function testServer() {
  console.log()
  return request('/api/test');
}