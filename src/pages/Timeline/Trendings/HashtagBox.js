import { useEffect } from "react";
import { useState } from "react";
import api from "../../../services/api";
import {
  Container,
  HashtagsContainer,
  HashtagLink,
  Title,
  TitleContainer,
} from "./HashtagBoxStyle";
import { useLocation, useNavigate } from "react-router";

function Hashtags({ setLoadHashtags, loadHashtags, loadPosts }) {
  const [trendings, setTrendings] = useState(null);
  const navigation = useNavigate();
  let newLocation = useLocation();

  async function handleTrendings() {
    const token = JSON.parse(localStorage.getItem("auth"));
    if (!token) {
      alert("You have to be logged in!");
      navigation("/");
      return;
    }
    try {
      const hashtag = await api.getHashtags(token);
      setTrendings(hashtag.data);
      setLoadHashtags(true);
      return;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleTrendings();
  }, [loadHashtags]);

  if (trendings === null) {
    return (
      <Container>
        <div>
          <Title>trending</Title>
        </div>

        <HashtagsContainer>Loading...</HashtagsContainer>
      </Container>
    );
  }

  const listTrending = trendings.map((hashtag, index) => {
    return (
      <HashtagLink
        key={index}
        onClick={() => {
          loadPosts(newLocation);
          navigation(`/hashtag/${hashtag.tag}`);
          window.location.reload();
        }}
      >
        # {hashtag.tag}
      </HashtagLink>
    );
  });

  return (
    <Container>
      <TitleContainer>
        <Title>trending</Title>
      </TitleContainer>
      <HashtagsContainer>{listTrending}</HashtagsContainer>
    </Container>
  );
}

export default Hashtags;
