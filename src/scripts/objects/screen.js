const screen = {
  userProfile: document.querySelector(".profile-data"),
  renderUser(userData) {
    this.userProfile.innerHTML = `<div class="info">
        <a href="${userData.userHtml}" target="_blank">
          <img src="${
            userData.avatarUrl
          }" alt="Foto de perfil no GitHub do usuário" />
        </a>
        <div class="data">
          <h2>${userData.name ?? "Não possui nome cadastrado 😢"}</h2>
          <p>${userData.bio ?? "Não possui bio cadastrado 😢"}</p>
          <br />
          <p><strong>Seguidores:</strong> ${
            userData.followers ?? "Não possui seguidores 😢"
          }</p>
          <p><strong>Seguindo:</strong> ${
            userData.following ?? "Não segue ninguém 😢"
          }</p>
        </div>
      </div>`;

    let eventsItems = "";
    userData.events.forEach((event) => {
      eventsItems += `<li><a href="${event.repositoryUrl}"><strong>${event.repositoryName}</strong></a> - ${event.commit}</li>`;
    });

    if (userData.events.length > 0) {
      this.userProfile.innerHTML += `<div class="events section">
        <h2>Eventos</h2>
        <ul>${eventsItems}</ul>
      </div>`;
    } else {
      this.userProfile.innerHTML += `<div class="events section">
        <h2>Eventos</h2>
        <p>Não possui eventos do tipo 'CreateEvent' ou 'PushEvent' 😢</p>
      </div>`;
    }

    let repositoriesItems = "";
    userData.repositories.forEach((repo) => {
      repositoriesItems += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`;
    });

    if (userData.repositories.length > 0) {
      this.userProfile.innerHTML += `<div class="repositories section">
        <h2>Repositórios</h2>
        <ul>${repositoriesItems}</ul>
      </div>`;
    } else {
      this.userProfile.innerHTML += `<div class="repositories section">
        <h2>Repositórios</h2>
        <p>Não possui repositórios 😢</p>
      </div>`;
    }
  },
  renderNotFound() {
    this.userProfile.innerHTML = "<h2>Usuário não encontrado 😢</h2>";
  },
};

export { screen };
