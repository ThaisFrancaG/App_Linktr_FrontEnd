import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  justify-content: center;

  @media (max-width: 375px) {
    flex-direction: column;
    justify-content: start;
  }
`;
const TitleScreen = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #151515;
  box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 375px) {
    height: 175px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    padding-left: 144px;

    @media (max-width: 375px) {
      margin-left: 0px;
      align-items: center;
      padding-left: 0;
    }
  }
`;

const Title = styled.span`
  font-family: Passion One;
  color: #ffffff;

  font-size: 106px;
  font-style: normal;
  font-weight: 700;
  line-height: 117px;
  letter-spacing: 0.05em;
  text-align: left;

  @media (max-width: 375px) {
    margin-bottom: -10px;
    font-size: 76px;
    line-height: 84px;
  }
`;

const SubTitle = styled.span`
  font-family: "Oswald";
  font-size: 43px;
  font-style: normal;
  font-weight: 700;
  line-height: 64px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;

  @media (max-width: 375px) {
    font-size: 23px;
    line-height: 34px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 51px 0 55px;

  @media (max-width: 375px) {
    width: 90%;
    margin-top: 40px;
    justify-content: start;
    padding: 0px;
  }
`;

const Input = styled.input`
  width: 429px;
  height: 65px;

  padding: 15px;
  border: 1px solid #d5d5d5;
  border-radius: 6px;
  margin: 6px 0px 6px;

  color: #9f9f9f;
  font-weight: 700;
  font-size: 27px;
  line-height: 40px;
  font-family: "Oswald";

  @media (max-width: 375px) {
    width: 100%;
    height: 55px;
    font-size: 22px;
    line-height: 32px;
    border-radius: 8px;
  }
`;

const Button = styled.button`
  width: 429px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  margin-top: 6px;

  cursor: pointer;

  font-size: 27px;
  line-height: 40px;
  font-weight: 700;
  text-align: center;
  font-family: Oswald;

  background: #1877f2;
  color: #fff;

  @media (max-width: 375px) {
    width: 100%;
    height: 55px;
    font-size: 22px;
    line-height: 32px;
  }
`;

const StyledLink = styled(Link)`
  margin-top: 22px;
  font-size: 20px;
  line-height: 24px;
  font-weight: bold;
  color: #ffffff;
  font-family: "Lato";
  text-decoration-line: underline;

  @media (max-width: 375px) {
    font-size: 17px;
    line-height: 20px;
  }
`;

export {
  Container,
  TitleScreen,
  Title,
  SubTitle,
  Form,
  Input,
  Button,
  StyledLink,
};
