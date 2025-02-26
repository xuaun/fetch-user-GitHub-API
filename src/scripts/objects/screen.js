const screen = {
  userProfile: document.querySelector(".profile-data"),
  renderUser(userData) {
    this.userProfile.innerHTML = `<div class="info">
        <a href="${userData.html_url}" target="_blank">
          <img src="${
            userData.avatarUrl
          }" alt="Foto de perfil no GitHub do usuário" />
        </a>
        <div class="data">
          <h2>${userData.name ?? "Não possui nome cadastrado 😢"}</h2>
          <p>${userData.bio ?? "Não possui bio cadastrado 😢"}</p>
        </div>
      </div>`;

    let repositoriesItems = "";
    userData.repositories.forEach((repo) => {
      repositoriesItems += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`;
    });

    if (userData.repositories.length > 0) {
      this.userProfile.innerHTML += `<div class="repositories section">
        <h2>Repositórios</h2>
        <ul>${repositoriesItems}</ul>
      </div>`;
    }
  },
  renderNotFound() {
    this.userProfile.innerHTML = "<h2>Usuário não encontrado 😢</h2>";
  },
};

export { screen };
