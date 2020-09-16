module.exports = {
  version: '1.2.0',
  init: (pluginContext) => {
    let policy = require('./policies/rewrite-policy');
    pluginContext.registerPolicy(policy);
  }
}