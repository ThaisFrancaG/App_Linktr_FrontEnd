import axios from "axios";

const BASE_URL = "http://localhost:5000";
//const BASE_URL = "https://projeto-linkr.herokuapp.com";

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

async function getHashtagPosts(hashtag, token) {
  const config = authData(token);
  return await axios.get(`${BASE_URL}/hashtag/${hashtag}`, config);
}

async function getHashtags(token) {
  const config = authData(token);
  return await axios.get(`${BASE_URL}/hashtag`, config);
}

async function getUsers(name, token) {
  const config = authData(token);
  return await axios.get(`${BASE_URL}/users?name=${name}`, config);
}

async function toggleLike(token, postId) {
  const config = authData(token);
  return await axios.post(
    `${BASE_URL}/likes`,
    {
      postId: postId,
    },
    config
  );
}

async function getLikes(token, postId) {
  const config = authData(token);
  return await axios.get(`${BASE_URL}/likes`, config);
}

async function updatePosts(token, body) {
  const config = authData(token);
  return await axios.put(`${BASE_URL}/post`, body, config);
}

async function deletePost(id, token) {
  const config = authData(token);
  return await axios.delete(`${BASE_URL}/post/${id}`, config);
}

async function getFollowing(token) {
  const config = authData(token);
  return await axios.get(`${BASE_URL}/follow`, config);
}

async function toggleFollowing(token, followId) {
  const config = authData(token);
  return await axios.post(`${BASE_URL}/follow`, { userId: followId }, config);
}

async function postComment(token, body, postId) {
  const config = authData(token);
  return await axios.post(`${BASE_URL}/post/${postId}/comment`, body, config);
}

async function getComments(token, postId) {
  const config = authData(token);
  return await axios.get(`${BASE_URL}/post/${postId}/comment`, config);
}

async function addRepost(token, postId) {
  console.log("chegou");
  const config = authData(token);
  return await axios.post(`${BASE_URL}/reposting`, { postId: postId }, config);
}

async function getRepost(token, postId) {
  const config = authData(token);
  return await axios.get(`${BASE_URL}/reposting`, { postId: postId }, config);
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
  getHashtags,
  toggleLike,
  getLikes,
  updatePosts,
  deletePost,
  getFollowing,
  toggleFollowing,
  postComment,
  getComments,
  addRepost,
  getRepost,
};

export default api;
