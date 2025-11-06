export const postMapper = (post) => ({
  id: post._id.toHexString(),
  title: post.title,
  content: post.content,
  author: post.author,
  published_at: post.createdAt.toISOString().slice(0, 10),
});
