import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/userAuth";
import api from "../../services/api";
import PublishCard from "./PublishCard";
import { Container, TimelineTitle } from "./TimelineStyles";

import { PostContainer } from "./PostStyle";
import PostsLists from "./PostsItems/PostsList";
import Header from "./Header";
import Hashtags from "./Trendings/HashtagBox";

function Timeline() {
  const { auth } = useAuth();
  const navigation = useNavigate();
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [likes, setLikes] = useState([]);
  const [reloadPosts, setReloadPosts] = useState(false);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const { hashtag } = useParams();

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
        response = await api.getUserPublications(Number(id), token);
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

  async function getWhoLiked() {
    try {
      const { data } = await api.getLikes(auth);
      console.log(data);
      setLikes(data);
    } catch (error) {
      console.log("deu ruim");
      console.log(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    loadPosts();
    getWhoLiked();
    setReloadPosts(false);
  }, [reloadPosts]);

  return (
    <Container>
      <Header user={user} />
      <PostContainer>
        <TimelineTitle>
          {location.pathname !== "/timeline"
            ? location.pathname !== `/hashtag/${hashtag}`
              ? `${posts[0]?.username}'s posts`
              : `# ${hashtag}`
            : "timeline"}
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
        {loading ? (
          <>Loading...</>
        ) : (
          <PostsLists
            posts={posts}
            user={user}
            loadPosts={loadPosts}
            getWhoLiked={getWhoLiked}
            likes={likes}
          />
        )}
      </PostContainer>
      <Hashtags />
    </Container>
  );
}

export default Timeline;
