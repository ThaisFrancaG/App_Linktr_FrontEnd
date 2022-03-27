import styled from "styled-components";

const PostContainer = styled.main`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  padding-top: 80px;
  row-gap: 30px;
  width: 611px;
  margin-top: 100px;
  font-family: "Lato";
  overflow: hidden;
  @media (max-width: 375px) {
    width: 100%;
    padding-top: 0px;
  }
`;
const WriteContainer = styled.div`
  height: 218px;
  display: flex;

  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  padding: 20px 18px;
  color: #707070;

  background-color: blue;
`;

const FormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 500px;
  row-gap: 4px;
  color: #949494;
`;
const FormTitle = styled.span`
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 10px;
  color: #949494;
`;

const Input = styled.input`
  height: ${(props) => (props.inputLabel === "url" ? "30px" : "70px")};
  padding-left: 17px;

  border-radius: 5px;
  border: none;
  background-color: #efefef;

  font-size: 15px;
  font-weight: 300;
  line-height: 18px;
`;

const Button = styled.button`
  height: 31px;
  width: 112px;

  margin-right: 0px;
  justify-content: center;

  border-radius: 6px;
  border: none;
  background-color: #1877f2;

  font-size: 14px;
  font-weight: 700;
  line-height: 17px;

  color: #ffffff;
  position: absolute;
  bottom: 0px;
  right: 0;
`;

const ReadContainer = styled.article`
  height: 280px;
  display: flex;

  background-color: #171717;
  border-radius: 16px;
  padding: 20px;
  color: #ffffff;

  @media (max-width: 375px) {
    border-radius: 0px;
  }
`;

const ProfileContainer = styled.figure`
  width: 90px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  img {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin-bottom: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #ffffff;
    @media (max-width: 375px) {
      width: 40px;
      height: 40px;
    }
  }
  @media (max-width: 375px) {
    width: 40px;
  }
`;
const InfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 0 5px;
  width: 500px;
  position: relative;
  @media (max-width: 375px) {
    width: 100%;
  }
`;

const PostUser = styled.span`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;

  font-weight: 400;
  font-size: 19px;
  line-height: 23px;
  margin-bottom: 10px;
  @media (max-width: 375px) {
    font-size: 17px;
  }
`;

const PostComment = styled.span`
  display: flex;
  flex-wrap: wrap;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  max-height: 52px;
  overflow: hidden;
  color: #b7b7b7;

  @media (max-width: 375px) {
    font-size: 15px;
  }
`;

export {
  PostContainer,
  WriteContainer,
  ReadContainer,
  ProfileContainer,
  InfoContainer,
  PostComment,
  PostUser,
  FormContainer,
  FormTitle,
  Input,
  Button,
};
