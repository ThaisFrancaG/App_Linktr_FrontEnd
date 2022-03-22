import styled from "styled-components";
import { Link } from "react-router-dom";
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 51px 0 55px;
`;

const Input = styled.input`
  height: 70px;
  margin-bottom: 15px;
  padding-left: 17px;

  border-radius: 6px;
  border: none;
  background-color: #ffffff;

  font-size: 27px;
  font-weight: 700;
  line-height: 40px;

  color: #9f9f9f;
  font-family: "Oswald";
`;

const Button = styled.button`
  height: 70px;
  width: 100%;
  margin-bottom: 15px;
  justify-content: center;

  border-radius: 6px;
  border: none;
  background-color: #1877f2;

  font-size: 27px;
  font-weight: 700;
  line-height: 40px;

  color: #ffffff;
  font-family: "Oswald";
`;

const StyledLink = styled(Link)`
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;

  font-family: "Lato";
  color: #ffffff;
`;
export {
  AuthorizationScreen,
  TitleScreen,
  Title,
  SubTitle,
  Form,
  Input,
  Button,
  StyledLink,
};
