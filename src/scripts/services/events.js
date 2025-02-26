import { baseUrl } from "../variables.js";

async function getEvents(userNick) {
  const url = `${baseUrl}${userNick}/events?per_page=100`;
  const response = await fetch(url);

  return await response.json();
}

export { getEvents };
