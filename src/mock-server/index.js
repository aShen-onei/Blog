/**
 * mock本地服务
 */
const apiList    = require('./mock/testMock.js');
const ApiHnadler = require('./handler.js');
const jsonServer = require('json-server'); // 引入json-server
const ApiHandler = require('./handler.js');
const context    = require('../util/context.js');
const path       = require('path'); 
const server     = jsonServer.create(); // 创建服务--express服务
const middleware = jsonServer.defaults(); // 中间件

server.use(middleware); // 启用中间件
// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);

context('/src/mock-server/mock', false);

let handlerUtil = new ApiHandler();
for(let [key, value] of Object.entries(apiList)) {
  let { methods, uri } = handlerUtil.splitApi(key);
  server.use(uri, value);
}

server.listen(8090, () => {
  console.log('Mock Server is Running At Port 8090;')
})