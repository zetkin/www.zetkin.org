'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('ziggi')
      .service('myService')
      .getWelcomeMessage();
  },
};
