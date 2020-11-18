const { override, fixBabelImports, addLessLoader,addWebpackAlias  } = require('customize-cra');
const path = require("path")

module.exports = override(
  fixBabelImports('import', { // 按需引入ant
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addWebpackAlias({ //路径别名
    '@': path.resolve(__dirname, 'src'),
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' }, // 修改主题色
  }),
);
