import axios from "axios";

const BASE_URL = "http://localhost:5000";

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

async function logOut(token) {
  return await axios.delete(`${BASE_URL}/logout`, {data: {token}});
}

async function getUserData(token) {
  return await axios.get(`${BASE_URL}/user/${token}`);  
}

async function postPublication(body) {
  return await axios.post(`${BASE_URL}/publish`, body);  
}

const api = { signIn, logOut, getUserData, postPublication };
export default api;
