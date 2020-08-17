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
// 测试函数
const testData = (req, res) => {
  res.json(testmock);
}

export default {
  'GET /api/test': testData
}