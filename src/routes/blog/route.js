module.exports = {
  permalink: ({ request }) => `/${request.slug}/`,
  all: async ({ data }) => data.posts.filter((post) => !post.content.draft),
  data: async ({ request, data }) => {
    return {
      post: data.posts.find((post) => post.slug === request.slug),
    };
  },
};
