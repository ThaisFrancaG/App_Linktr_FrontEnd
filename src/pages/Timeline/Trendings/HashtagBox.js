import { useEffect } from "react";
import { useState } from "react";
import api from "../../../services/api";
import {
  Container,
  HashtagsContainer,
  StyledLink,
  Title,
  TitleContainer,
} from "./HashtagBoxStyle";
import { useNavigate } from "react-router";

function Hashtags() {
  const [trendings, setTrendings] = useState(null);
  const navigation = useNavigate();

  async function handleTrendings() {
    const token = JSON.parse(localStorage.getItem("auth"));
    if (!token) {
      alert("Faça Login");
      navigation("/");
      return;
    }
    try {
      const hashtag = await api.getHashtags(token);

      setTrendings(hashtag.data);
      return;
    } catch (error) {
      console.log(error);
      return;
    }
  }

  useEffect(() => {
    handleTrendings();
  }, [trendings]);

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
      <StyledLink key={index} to={`/hashtag/${hashtag.tag}`}>
        # {hashtag.tag}
      </StyledLink>
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
