import axios from "axios";

//const BASE_URL = "http://localhost:5000";
const BASE_URL = "https://projeto-linkr.herokuapp.com";

function authData(token) {
  return {
    headers: {
      authorization: `Bearer ${token}`,
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
  const config = authData(token);
  return await axios.delete(`${BASE_URL}/logout`, config);
}

async function getUserData(token) {
  const config = authData(token);
  return await axios.get(`${BASE_URL}/user-data`, config);
}

async function postPublication(body) {
  return await axios.post(`${BASE_URL}/publish`, body);
}

async function getPublications(token) {
  const config = authData(token);
  return await axios.get(`${BASE_URL}/timeline`, config);
}

async function getUserPublications(id, token) {
  const config = authData(token);
  return await axios.get(`${BASE_URL}/user/${id}`, config);
}

async function getHashtagPosts(hashtag) {
  return await axios.get(`${BASE_URL}/hashtag/${hashtag}`);
}

async function getUsers(name, token) {
  const config = authData(token);
  return await axios.get(`${BASE_URL}/users?name=${name}`, config);
}

async function toggleLike(token, postId, liked) {
  return await axios.post(`${BASE_URL}/likes`, {
    postId: postId,
    token: token,
    liked: liked,
  });
};

async function getLikes(token) {
  const config = authData(token);
  return await axios.get(`${BASE_URL}/likes`, config);
};

async function updatePosts(token, body) {
  const config = authData(token);
  return await axios.put(`${BASE_URL}/post`, body, config)
};

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
  toggleLike,
  getLikes,
  updatePosts,
};

export default api;
