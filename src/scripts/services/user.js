import { baseUrl } from "../variables.js";

async function getUser(userNick) {
  const url = `${baseUrl}${userNick}`;
  const response = await fetch(url);

  return await response.json();
}

export { getUser };
