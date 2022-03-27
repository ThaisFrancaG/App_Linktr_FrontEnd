import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/userAuth";
import api from "../../services/api";
import PublishCard from "./PublishCard";
import { TimelineTitle } from "./TimelineStyles";

import { PostContainer } from "./PostStyle";
import PostsLists from "./PostsItems/PostsList";
import Header from "./Header";

function Timeline() {
  const { auth } = useAuth();
  const navigation = useNavigate();
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [reloadPosts, setReloadPosts] = useState(false);
  const [loading, setLoading] = useState(true);
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

  async function loadPosts() {
    const path = location.pathname;
    const token = JSON.parse(localStorage.getItem("auth"));
    let response;
    try {
      if (path.includes("/user/")) {
        const id = path.split("/")[2];
        response = await api.getUserPublications(Number(id));
      } else if (path.includes("/hashtag/")) {
        const hashtag = path.split("/")[2];
        response = await api.getHashtagPosts(hashtag);
      } else {
        response = await api.getPublications(token);
      }
      setPosts(response.data);
      setLoading(false);
    } catch (error) {
      alert(
        "An error occured while trying to fetch the posts, please refresh the page"
      );
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    loadPosts();
    setReloadPosts(false);
  }, [reloadPosts]);

  return (
    <>
      <Header user={user} />
      <PostContainer>
        <TimelineTitle>
          {location.pathname !== "/timeline"
            ? `${posts[0]?.username}'s posts`
            : "Timeline"}
        </TimelineTitle>
        {location.pathname !== "/timeline" ? (
          <></>
        ) : (
          <PublishCard
            user={user}
            setReloadPosts={setReloadPosts}
            setLoading={setLoading}
          />
        )}
        {loading ? <>Loading...</> : <PostsLists posts={posts} />}
      </PostContainer>
    </>
  );
}

export default Timeline;
