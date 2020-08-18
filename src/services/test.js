/**
 * 测试接口
 */
import request from '../util/request.js'

export async function testServer() {
  return request('/api/test');
}
export async function getSongData() {
  return request('/api/song');
}