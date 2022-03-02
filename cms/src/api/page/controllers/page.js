'use strict';

/**
 *  page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::page.page', ({ strapi }) => ({
  async findOne(ctx) {
    const pageId = parseInt(ctx.request.params.id);

    const entity = await strapi.entityService.findOne(
      'api::page.page',
      pageId,
      {
        fields: ['*'],
        populate: {
          blocks: {
            populate: {
              accordionItems: true,
              background: true,
              image: true,
              images: {
                populate: {
                  image: true,
                },
              },
              links: {
                populate: {
                  page: true,
                },
              },
              logos: {
                populate: {
                  image: true,
                  page: true,
                },
              },
              nodes: {
                populate: {
                  image: true,
                },
              },
            },
          },
          image: true,
        },
      }
    );
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
  },
}));
