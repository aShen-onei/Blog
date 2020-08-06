/**
 * 配置的相关文件，添加该项目的配置文件
 */
const NODE_ENV    = process.env.NODE_ENV;
const MOCK_CONFIG = {
  ENV: NODE_ENV,
  API: 'http://localhost:8090'
}

export default {
  NODE_ENV,
  MOCK_CONFIG,
}