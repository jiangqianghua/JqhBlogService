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
      host: '180.76.105.202',
      port: '3306',
      user: 'root',
      password: 'Jiang123!',
      database: 'jqh_blog'
    },
    app: true,
    agent: false
  };
  return {
    ...config,
    ...userConfig,
  };
};
