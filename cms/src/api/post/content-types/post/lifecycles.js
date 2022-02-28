const slugify = require('slugify');

module.exports = {
  async beforeCreate(post) {
    if (post.params.data.title) {
      post.params.data.slug = slugify(post.params.data.title, { lower: true });
    }
  },
  async beforeUpdate(post) {
    if (post.params.data.title) {
      post.params.data.slug = slugify(post.params.data.title, { lower: true });
    }
  },
};
