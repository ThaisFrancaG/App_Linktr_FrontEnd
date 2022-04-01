import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/userAuth";
import api from "../../services/api";
import PublishCard from "./PublishCard";
import {
  Container,
  LoadMorePosts,
  TimelineContainer,
  TimelineTitle,
} from "./TimelineStyles";
import { AiOutlineReload } from "react-icons/ai";

import { PostContainer } from "./PostStyle";
import PostsLists from "./PostsItems/PostsList";
import Header from "./Header";
import Hashtags from "./Trendings/HashtagBox";
import FollowButton from "./Following/FollowButton";
import useInterval from "use-interval";

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
  const [loadHashtags, setLoadHashtags] = useState(false);
  const [numPosts, setNumPosts] = useState(0);
  const [loading, setLoading] = useState(true);
  const [following, setFollowing] = useState([]);
  const location = useLocation();
  let path = location.pathname;
  const { hashtag } = useParams();
  const token = JSON.parse(localStorage.getItem("auth"));

  useInterval(
    async () => {
      if (path === "/timeline") {
        const { data: newPosts } = await api.getPublications(token);

        const lastPostId = posts[0].id;
        const newPostLastId = newPosts[0].id;

        setNumPosts(Number(newPostLastId) - Number(lastPostId));
      }
    },
    path === "/timeline" ? 15000 : null
  );

  async function getUser() {
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

  async function loadPosts(newLocation = null) {
    path = newLocation ? newLocation.pathname : location.pathname;
    console.log(path);
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
    setNumPosts(0);
    loadPosts();
    getWhoLiked();
    checkFollowing();
    setReloadPosts(false);
    setLoadHashtags(false);
  }, [reloadPosts]);

  return (
    <Container>
      <Header user={user} />
      <TimelineContainer>
        <PostContainer>
          <TimelineName state={state} hashtag={hashtag} />

          {path !== "/timeline" && path.slice(0, 8) !== "/hashtag" ? (
            <FollowButton
              display={true}
              pageInfo={posts[0]?.userId}
              following={following}
            />
          ) : (
            <FollowButton display={false} />
          )}

          {path !== "/timeline" ? (
            <></>
          ) : (
            <PublishCard
              user={user}
              setReloadPosts={setReloadPosts}
              setLoading={setLoading}
            />
          )}
          {numPosts ? (
            <LoadMorePosts onClick={() => setReloadPosts(true)}>
              {numPosts} new posts, load more! <AiOutlineReload />
            </LoadMorePosts>
          ) : (
            <></>
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
        <Hashtags
          setLoadHashtags={setLoadHashtags}
          loadHashtags={loadHashtags}
          loadPosts={loadPosts}
        />
      </TimelineContainer>
    </Container>
  );
}

export default Timeline;
