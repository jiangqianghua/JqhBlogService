/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1595435236817_2655';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.mysql = {
    client: {
      host: '180.76.106.203',
      port: '3306',
      user: 'root',
      password: 'Jiang123!',
      database: 'jqh_blog'
    },
    app: true,
    agent: false
  };

  config.security = {
    csrf: {
      enable: false
    },
    domainWhiteList: ['*']
  };
  config.cors = {
    origin: 'http://localhost:3000',
    credentials: true,  //允许Cook可以跨域
    allowMethods: 'GET, HEAD, PUT, POST, DELETE, PATCH, OPTIONS'
  }
  return {
    ...config,
    ...userConfig,
  };
};

exports.middleware = ['adminauth']; // 数组的顺序为中间件执行的顺序
