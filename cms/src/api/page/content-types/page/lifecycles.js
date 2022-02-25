module.exports = {
  async afterFindOne(event) {
    event.result.blocks = event.result.blocks.map(async (block) => {
      if (block.__component === 'blocks.post-feed') {
        const posts = await getPosts();
        return { ...block, posts };
      } else {
        return block;
      }
    });
  },
};

const getPosts = () => {
  return strapi.entityService.findMany('api::post.post', {
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
      image: true,
    },
    sort: { publishedAt: 'desc' },
    limit: 4,
  });
};
