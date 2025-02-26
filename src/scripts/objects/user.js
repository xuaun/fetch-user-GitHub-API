import { eventsType, eventsQuantity } from "../variables.js";

const user = {
  userHtml: "",
  avatarUrl: "",
  name: "",
  bio: "",
  userName: "",
  followers: "",
  following: "",
  events: [],
  repositories: [],
  setInfo(githubUser) {
    this.userHtml = githubUser.html_url;
    this.avatarUrl = githubUser.avatar_url;
    this.name = githubUser.name;
    this.bio = githubUser.bio;
    this.userName = githubUser.bio;
    this.followers = githubUser.followers;
    this.following = githubUser.following;
  },
  setEvents(events) {
    let total = 0;
    this.events = [];
    events.forEach((event) => {
      if (eventsType[0] === event.type && total < eventsQuantity) {
        this.events.push({
          repositoryName: event.repo.name,
          repositoryUrl: event.repo.url,
          commit: "Sem mensagem de commit",
        });
        total++;
      } else if (eventsType[1] === event.type && total < eventsQuantity) {
        this.events.push({
          repositoryName: event.repo.name,
          repositoryUrl: event.repo.html_url,
          commit: event.payload.commits[0].message,
        });
        total++;
      }
    });
  },
  setRepositories(repos) {
    this.repositories = repos;
  },
};

export { user };
