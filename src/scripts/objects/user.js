const user = {
  userHtml: "",
  avatarUrl: "",
  name: "",
  bio: "",
  userName: "",
  followers: "",
  following: "",
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
  setRepositories(repos) {
    this.repositories = repos;
  },
};

export { user };
