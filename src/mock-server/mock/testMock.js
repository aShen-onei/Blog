/**
 * 测试的mock数据
 */
const testmock = {
  code: '0',
  message: 'success',
  data: {
    testData: '这是一个接口',
  }
}
const data = {
  code: '0',
  success: true,
  message: 'success',
  data: {
    time: '20200818',
    name: 'jaychou',
    type: 'song',
  }
}
// 测试函数
const testData = (req, res) => {
  res.json(testmock);
}
const getSongData = (req, res) => {
  res.json(data);
}
const list = {
  'GET /api/test': testData,
  'GET /api/song': getSongData,
}
module.exports = list;