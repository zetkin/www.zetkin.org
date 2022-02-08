'use strict';

/**
 *  main-menu controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::main-menu.main-menu', ({ strapi }) => ({
  async find(ctx) {
    const entity = await strapi.entityService.findMany('api::main-menu.main-menu', {
      fields: ['*'],
      populate: {
        section1: {
          populate: {
            cta: {
              populate: {
                page: true,
              }
            },
            image: true,
            links: {
              populate: {
                page: true,
              }
            },
          }
        },
      },
    });
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);

  }
}));
