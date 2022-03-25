import axios from "axios";

const BASE_URL = "http://localhost:5000";
//const BASE_URL = "https://projeto-linkr.herokuapp.com";

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
  console.log(token);
  return token;
}

async function signUp(user) {
  await axios.post(`${BASE_URL}/sign-up`, user);
}

async function logOut(token) {
  return await axios.delete(`${BASE_URL}/logout`, { data: { token } });
}

async function getUserData(token) {
  return await axios.get(`${BASE_URL}/user/${token}`);
}

async function postPublication(body) {
  return await axios.post(`${BASE_URL}/publish`, body);
}

async function getPublications() {
  return await axios.get(`${BASE_URL}/timeline`);
}

const api = {
  signIn,
  signUp,
  logOut,
  getUserData,
  postPublication,
  getPublications,
};

export default api;
