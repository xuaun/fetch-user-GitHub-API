async function getWatchers(reposResponse) {
  let allResponses = await Promise.all(
    reposResponse.map(async (repo) => {
      const url = repo.subscribers_url;
      const response = await fetch(url);
      const json = await response.json();
      allResponses.push(json);
    })
  );

  return allResponses;
}

export { getWatchers };
