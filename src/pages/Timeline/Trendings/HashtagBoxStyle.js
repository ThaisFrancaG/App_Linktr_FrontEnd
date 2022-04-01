import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  position: sticky;

  width: 301px;
  height: 406px;
  margin-left: 30px;
  top: 152px;
  right: 0px;

  border-radius: 16px;
  background-color: #171717;

  margin-top: 152px;

  @media (max-width: 430px) {
    display: none;
  }
`;

const HashtagsContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 345px;

  padding-left: 16px;
  padding-top: 25px;

  gap: 8px;

  font-family: "Lato";
`;

const TitleContainer = styled.div`
  display: flex;
  height: 61px;

  border-bottom: 1px solid #484848;
`;

const Title = styled.span`
  font-family: "Oswald";
  font-size: 27px;
  font-weight: 700;
  color: #ffffff;

  margin: 16px auto auto 16px;
`;

const HashtagLink = styled.span`
  display: flex;

  font-family: "Lato";
  font-size: 19px;

  font-weight: 700;
  line-height: 22.8px;

  color: #ffffff;

  cursor: pointer;
`;

export { Container, HashtagsContainer, TitleContainer, Title, HashtagLink };
