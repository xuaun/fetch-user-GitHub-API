async function getWatchers(reposResponse) {
  const allResponses = await Promise.all(
    reposResponse.map(async (repo) => {
      const url = repo.subscribers_url;
      const response = await fetch(url);
      return await response.json();
    })
  );

  return allResponses;
}

export { getWatchers };
