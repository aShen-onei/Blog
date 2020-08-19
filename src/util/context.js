const { default: request } = require("umi-request");

/**
 * require.context的实现
 */
const dir  = require('node-dir'); // 目录插件
const path = require('path');

/**
 * require.context实现
 * @param {string} directory 目录
 * @param {boolean} recursive 是否深度遍历
 * @param {regExp} regExp 文件匹配正则
 */
const context = (directory, recursive, regExp) => {
  let basePath = directory; // 文件传入的路径

  if (directory[0] === '.') {
    // 相对路径
    basePath = path.join(__dirname, directory)
  } else if (!path.isAbsolute(directory)) {
    // 绝对路径
    basePath = require.resolve(directory)
  }

  // 获取keys
  let keys = dir.files(basePath,       { sync: true,recursive: recursive || false})
                .filter(function(file) { return file.match(regExp || /\.js$/); })
                .map(function(file)    { return path.join('.', file.slice(basePath.length + 1)); });
  console.log(keys)
}

module.exports = context;