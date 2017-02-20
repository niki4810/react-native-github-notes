export const api = {
  getBio(username) {
    username = username.toLowerCase().trim();
    const url = `https://api.github.com/users/${username}`;
    return fetch(url).then((res) => { return res.json(); });
  },
  getRepos(username) {
    username = username.toLowerCase().trim();
    const url = `https://api.github.com/users/${username}/repos`;
    return fetch(url).then((res) => { return res.json();});
  },
  getNotes(username) {
    username = username.toLowerCase().trim();
    const url = `https://githubsaver-8c1f6.firebaseio.com/${username}.json`;
    return fetch(url).then((res) => { return res.json();});
  },
  addNote(username, note) {
    username = username.toLowerCase().trim();
    const url = `https://githubsaver-8c1f6.firebaseio.com/${username}.json`;
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(note)
    }).then((res) => res.json());
  }
};
