const TOKEN_KEY = "TOKEN_KEY";
export default {
  getToken() {
    const token = localStorage.getItem(TOKEN_KEY);
    console.debug(["get token", token]);
    return token;
  },
  setToken(token) {
    console.debug(["set token", token]);
    localStorage.setItem(TOKEN_KEY, token);
  },
  verifyToken() {
    console.debug(["verify token", this.getToken()]);
    return !!this.getToken();
  },
};
