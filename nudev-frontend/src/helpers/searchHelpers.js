export const filterSearchTermHelper = (mockData, searchTerm) => {
  return mockData.filter((post) =>
    (post.name.toLowerCase() + post.description.toLowerCase()).includes(
      searchTerm.toLowerCase()
    )
  );
};

export const filterTagArrayHelper = (tagArray, filteredPosts) => {
  return filteredPosts.filter((post) =>
    post.tags.some((tag) => tagArray.includes(tag))
  );
};
