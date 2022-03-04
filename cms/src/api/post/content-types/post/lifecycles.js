const slugify = require('slugify');

const getPost = (postId) => {
  return strapi.entityService.findOne('api::post.post', postId, {
    fields: ['*'],
    filters: {
      $not: {
        publishedAt: null,
      },
    },
  });
};

module.exports = {
  async beforeCreate(newPost) {
    if (newPost.params.data.slug) {
      newPost.params.data.slug = slugify(newPost.params.data.slug, {
        lower: true,
      });
    } else {
      newPost.params.data.slug = slugify(newPost.params.data.title, {
        lower: true,
      });
    }
  },
  async beforeUpdate(updatedPost) {
    const oldPost = await getPost(updatedPost.params.where.id);

    if (updatedPost.params.data.title !== oldPost.title) {
      if (updatedPost.params.data.slug === oldPost.slug) {
        updatedPost.params.data.slug = slugify(updatedPost.params.data.title, {
          lower: true,
        });
      } else {
        updatedPost.params.data.slug = slugify(updatedPost.params.data.slug, {
          lower: true,
        });
      }
    } else {
      updatedPost.params.data.slug = slugify(updatedPost.params.data.slug, {
        lower: true,
      });
    }
  },
};
