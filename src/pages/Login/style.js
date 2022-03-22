import styled from "styled-components";

const AuthorizationScreen = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
`;
const TitleScreen = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 144px;
  padding-right: 300px;
  background-color: #151515;
`;

const Title = styled.span`
  font-size: 106px;
  font-weight: 700;
  line-height: 117px;
  font-family: "Passion One";
`;

const SubTitle = styled.span`
  font-size: 43px;
  font-weight: 700;
  line-height: 64px;
  font-family: "Oswald";
`;

export { AuthorizationScreen, TitleScreen, Title, SubTitle };
