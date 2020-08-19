/**
 * mock本地服务
 */
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


const dirPath     = path.join(__dirname, './mock'); // 需要解析的mock文件的路径
const moduleFiles = context(dirPath, false); // 将路径下的文件都解析出来
let apiList       = {}; // mockapi数据
// 将该文件夹下的所有mock文件都同一合并
moduleFiles.keys().forEach((key) => {
  Object.assign(apiList, moduleFiles(key));
})
// 将合并后的mock文件一一注册到jsonServer中启动mock服务
let handlerUtil = new ApiHandler();
for(let [key, value] of Object.entries(apiList)) {
  let { methods, uri } = handlerUtil.splitApi(key); // 将api和methods分离
  server.use(uri, value); // 注册mock服务
}

server.listen(8090, () => {
  console.log('Mock Server is Running At Port 8090;')
})