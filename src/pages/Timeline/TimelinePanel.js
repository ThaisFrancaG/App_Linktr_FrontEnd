import React, { useState, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/userAuth";
import api from "../../services/api";
import PublishCard from "./PublishCard";
import {
  HeaderComponent,
  LogoutButton,
  ProfileComponent,
  ProfileImg,
  Title,
} from "./TimelineStyles";

import { PostContainer } from "./PostStyle";
import PostsLists from "./PostsItems/PostsList";

function Header({ user }) {
  const [showLogout, setActive] = useState(false);
  const navigation = useNavigate();

  async function handleLogOut() {
    const token = JSON.parse(localStorage.getItem("auth"));
    try {
      await api.logOut(token);
      localStorage.removeItem("auth");
    } catch (error) {
      alert("Sessão não encontrada");
      return;
    }
    navigation("/");
    return;
  }

  return (
    <HeaderComponent>
      <Title>linktr</Title>
      <ProfileComponent onClick={() => setActive(!showLogout)}>
        {showLogout ? <IoIosArrowUp /> : <IoIosArrowDown />}
        <ProfileImg src={user?.pictureUrl} />
      </ProfileComponent>
      {showLogout ? (
        <LogoutButton onClick={() => handleLogOut()}>Logout</LogoutButton>
      ) : (
        <></>
      )}
    </HeaderComponent>
  );
}

function Timeline() {
  const { auth } = useAuth();
  const navigation = useNavigate();
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [reloadPosts, setReloadPosts] = useState(false);
  const location = useLocation();

  async function getUser() {
    const token = JSON.parse(localStorage.getItem("auth"));
    if (!token) {
      alert("Faça Login");
      navigation("/");
      return;
    }
    try {
      const response = await api.getUserData(token);
      setUser(response.data);
    } catch (error) {
      if (error.response.status === 400) {
        alert("Token Vazio, faça login novamente");
      } else {
        alert(`Algo deu errado`);
      }
      navigation("/");
      return;
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    async function loadPosts() {
      try {
        const { data } = await api.getPublications();
        setReloadPosts(true);
        setPosts(data);
      } catch (error) {
        alert(
          "An error occured while trying to fetch the posts, please refresh the page"
        );
      }
    }
    console.log(reloadPosts);
    setReloadPosts(false);
    loadPosts();
  }, [reloadPosts]);
  console.log(posts);
  return (
    <>
      <Header user={user} />
      <PostContainer>
        {location.pathname !== "/timeline" ? (
          <></>
        ) : (
          <PublishCard
            user={user}
            reloadPosts={reloadPosts}
            setReloadPosts={setReloadPosts}
          />
        )}
        <PostsLists posts={posts} />
      </PostContainer>
    </>
  );
}

export default Timeline;
