module.exports = {
  async index(ctx) {
    ctx.body = await strapi.entityService.findMany('api::post.post', {
      fields: ['*'],
      filters: {
        $not: {
          publishedAt: null,
        },
      },
      populate: {
        blocks: {
          populate: {
            image: true,
          },
        },
      },
      sort: { publishedAt: 'desc' },
      limit: 4,
    });
  },
};
