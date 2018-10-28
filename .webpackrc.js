const path = require('path');
export default {
    "entry": "src/index.js",
    "publicPath": "/",
    "extraBabelPlugins": [
        ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
    ],
    "env": {
      "development": {
        "extraBabelPlugins": ["dva-hmr"]
      }
    },
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
    },
}
