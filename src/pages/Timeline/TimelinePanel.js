import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/userAuth";
import api from "../../services/api";
import PublishCard from "./PublishCard";
import { Container, TimelineContainer, TimelineTitle } from "./TimelineStyles";

import { PostContainer } from "./PostStyle";
import PostsLists from "./PostsItems/PostsList";
import Header from "./Header";
import Hashtags from "./Trendings/HashtagBox";
import FollowButton from "./Following/FollowButton";

function TimelineName({ state, hashtag }) {
  const location = useLocation();
  return (
    <TimelineTitle>
      {location.pathname !== "/timeline"
        ? location.pathname !== `/hashtag/${hashtag}`
          ? `${state.username}'s posts`
          : `# ${hashtag}`
        : "timeline"}
    </TimelineTitle>
  );
}

function Timeline() {
  const { auth } = useAuth();
  const { state } = useLocation();
  const navigation = useNavigate();
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [likes, setLikes] = useState([]);
  const [reloadPosts, setReloadPosts] = useState(false);
  const [loading, setLoading] = useState(true);
  const [following, setFollowing] = useState([]);
  const location = useLocation();
  const { hashtag } = useParams();

  async function getUser() {
    const token = JSON.parse(localStorage.getItem("auth"));
    if (!token) {
      alert("Please, reload and login again");
      navigation("/");
      return;
    }
    try {
      const response = await api.getUserData(token);
      setUser(response.data);
    } catch (error) {
      if (error.response.status === 400 || error.response.status === 401) {
        alert("Please, reload and login");
        localStorage.removeItem("auth");
        navigation("/");
        return;
      } else {
        alert(`Something went wrong. Please, try again later`);
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
        response = await api.getHashtagPosts(hashtag, token);
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
      setLikes(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function checkFollowing() {
    try {
      const { data } = await api.getFollowing(auth);
      setFollowing(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    loadPosts();
    getWhoLiked();
    checkFollowing();
    setReloadPosts(false);
  }, [reloadPosts]);

  return (
    <Container>
      <Header user={user} />
      <TimelineContainer>
        <PostContainer>
          <TimelineName state={state} hashtag={hashtag} />

          {location.pathname !== "/timeline" &&
          location.pathname.slice(0, 8) !== "/hashtag" ? (
            <FollowButton
              display={true}
              pageInfo={posts[0]?.userId}
              following={following}
            />
          ) : (
            <FollowButton display={false} />
          )}

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
          ) : typeof posts[0] === "string" ? (
            posts
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
      </TimelineContainer>
    </Container>
  );
}

export default Timeline;
