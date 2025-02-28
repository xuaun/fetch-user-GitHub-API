import { getUser } from "./services/user.js";
import { getEvents } from "./services/events.js";
import { getRepos } from "./services/repositories.js";
import { getWatchers } from "./services/watchers.js";

import { user } from "./objects/user.js";
import { screen } from "./objects/screen.js";

document.getElementById("btn-search").addEventListener("click", () => {
  const userNick = document.getElementById("input-search").value;

  if (validateInput(userNick)) return;
  getUserData(userNick);
});

document.getElementById("input-search").addEventListener("keyup", (e) => {
  const userNick = e.target.value;
  const key = e.which || e.keyCode;
  const isEnterKeyPressed = key === 13;

  if (isEnterKeyPressed) {
    if (validateInput(userNick)) return;
    getUserData(userNick);
  }
});

function validateInput(userNick) {
  if (userNick.length === 0) {
    alert("Preencha o campo com o nome do usuário do GitHub.");
    return true;
  }
}

async function getUserData(userNick) {
  const userResponse = await getUser(userNick);
  const eventsResponse = await getEvents(userNick);
  const reposResponse = await getRepos(userNick);
  const watchersResponse = await getWatchers(reposResponse);

  if (reposResponse.message === "Not Found") {
    alert("Usuário não encontrado.");
    screen.renderNotFound();
    return;
  }

  user.setInfo(userResponse);
  user.setEvents(eventsResponse);
  user.setRepositories(reposResponse, watchersResponse);

  screen.renderUser(user);
}
