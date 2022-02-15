'use strict';

/**
 *  page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::page.page', ({ strapi }) => ({
  async find(ctx) {
    const entity = await strapi.entityService.findMany('api::page.page', {
      fields: ['*'],
      populate: {
        children: {
          populate: {
            data: true,
          },
        },
        parent: {
          populate: {
            data: true,
          },
        },
      }
    });
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
  },
  async findOne(ctx) {
    const pageId = parseInt(ctx.request.params.id);

    const entity = await strapi.entityService.findOne('api::page.page', pageId, {
      fields: ['*'],
      populate: {
        blocks: {
          populate: {
            blurbs: {
              populate: {
                links: {
                  populate: {
                      page: true,
                    }
                  },
                }
              },
            background: true,
            image: true,
            links: {
              populate: {
                page: true,
              },
            },
            timelineNode: {
              populate: {
                image: true,
              }
            },
          },
        }
      },
    });
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
  }
}));


