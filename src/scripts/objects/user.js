const user = {
  userHtml: "",
  avatarUrl: "",
  name: "",
  bio: "",
  userName: "",
  repositories: [],
  setInfo(githubUser) {
    this.userHtml = githubUser.html_url;
    this.avatarUrl = githubUser.avatar_url;
    this.name = githubUser.name;
    this.bio = githubUser.bio;
    this.userName = githubUser.bio;
  },
  setRepositories(repos) {
    this.repositories = repos;
  },
};

export { user };
