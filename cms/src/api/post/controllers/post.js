'use strict';

/**
 *  post controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::post.post', ({ strapi }) => ({
  async find(ctx) {
    const entity = await strapi.entityService.findMany('api::post.post', {
      fields: ['*'],
      filters: ctx.request.query.filters,
      populate: {
        blocks: {
          populate: {
            image: true,
          },
        },
        image: true,
      },
    });
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
  },
  async findOne(ctx) {
    const postId = parseInt(ctx.request.params.id);
    const entity = await strapi.entityService.findOne(
      'api::post.post',
      postId,
      {
        fields: ['*'],
        populate: {
          blocks: {
            populate: {
              image: true,
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
