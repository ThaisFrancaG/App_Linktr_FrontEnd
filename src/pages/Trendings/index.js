import { useEffect, useState } from "react";

export default function Trendings() {
  const [trendings, setTrendings] = useState(null);
  const [loading, setLoading] = useState(true);

  //Função pra trazer os posts por hashtag
  async function handleTrendings() {
    // const path = location.pathname;
    // let response;
    // try {
    //   if (path.includes("/hashtag/")) {
    //     const tag = path.split("/")[2];
    //     response = await api.getHashtagPosts(tag);
    //   } else {
    //     response = await api.getPublications();
    //   }
    //   setTrendings(response.data);
    //   setLoading(false);
    // } catch (error) {
    //   console.log(error.response.data);
    // }

    //Função pra trazer as hashtags
    async function hashtags() {
      try {
        const { data } = await api.getHashtags();

        setTrendings(data);
      } catch (error) {
        console.log(error.response.data);
      }
    }
  }

  useEffect(() => {
    handleTrendings();
  }, []);

  if (trendings === null) {
    return (
      <Container>
        <TitleContainer>
          <Title>trending</Title>
        </TitleContainer>

        <Divider />

        <HashtagsContainer>Loading...</HashtagsContainer>
      </Container>
    );
  }

  const listTrendings = trendings.map((hashtag) => {
    return (
      <HashtagLink key={hashtag.id} to={`/hashtag/${hashtag.tag.slice(1)}`}>
        {hashtag.name}
      </HashtagLink>
    );
  });

  return (
    <Container>
      <TitleContainer>
        <Title>trending</Title>
      </TitleContainer>

      <Divider />

      <HashtagsContainer>{listTrendings}</HashtagsContainer>
    </Container>
  );
}
