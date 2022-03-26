import axios from "axios";

//const BASE_URL = "http://localhost:5000";
const BASE_URL = "https://projeto-linkr.herokuapp.com";

function authData(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

async function signIn(email, password) {
  const loginInfo = { email: email, password: password };
  const token = await axios.post(`${BASE_URL}/login`, loginInfo);
  return token;
}

async function signUp(user) {
  await axios.post(`${BASE_URL}/sign-up`, user);
}

async function logOut(token) {
  return await axios.delete(`${BASE_URL}/logout`, { data: { token } });
}

async function getUserData(token) {
  return await axios.get(`${BASE_URL}/user-data/${token}`);
}

async function postPublication(body) {
  return await axios.post(`${BASE_URL}/publish`, body);
}

async function getPublications() {
  return await axios.get(`${BASE_URL}/timeline`);
}

async function getUserPublications(id) {
  return await axios.get(`${BASE_URL}/user/${id}`);
}

async function getUsers() {
  return await axios.get(`${BASE_URL}/users`);
}

async function getHashtagPosts(hashtag) {
  return await axios.get(`${BASE_URL}/hashtag/${hashtag}`);
}

const api = {
  signIn,
  signUp,
  logOut,
  getUserData,
  postPublication,
  getPublications,
  getUserPublications,
  getUsers,
  getHashtagPosts,
};

export default api;
