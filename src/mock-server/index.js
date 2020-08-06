/**
 * mock本地服务
 */
const jsonServer = require('json-server'); // 引入json-server
const server     = jsonServer.create(); // 创建服务--express服务
const middleware = jsonServer.defaults(); // 中间件

server.use(middleware); // 启用中间件
// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);

server.use('/api/test', (req, res) => {
  res.json({
    code: '0',
    message: 'success',
    data: {
      testData: '这是一个接口',
    }
  });
})

server.listen(8090, () => {
  console.log('Mock Server is Running At Port 8090;')
})