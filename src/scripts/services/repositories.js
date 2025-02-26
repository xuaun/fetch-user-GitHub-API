import { baseUrl, repositoriesQuantity } from "../variables.js";

async function getRepos(userNick) {
  const url = `${baseUrl}${userNick}/repos?per_page=${repositoriesQuantity}`;
  const response = await fetch(url);

  return await response.json();
}

export { getRepos };
