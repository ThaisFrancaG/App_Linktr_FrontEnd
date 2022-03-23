import styled from "styled-components";

const PostContainer = styled.main`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  padding-top: 80px;
  row-gap: 30px;
  width: 611px;

  font-family: "Lato";
`;
const WriteContainer = styled.div`
  height: 209px;
  display:flex;
  
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  padding: 21px 20px 18px 20px;
  color:background: #707070;

`;

const FormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 0 5px;
  max-width: 500px;
  row-gap: 4px;
`;

const ReadContainer = styled.article`
  height: 280px;
  display: flex;

  background-color: #171717;
  border-radius: 16px;
  padding: 20px;
  color: #ffffff;
`;

const ProfileContainer = styled.figure`
  width: 90px;
  display: flex;
  justify-content: center;
  align-items: start;

  img {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #ffffff;
  }
`;
const InfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 0 5px;
  max-width: 500px;
  position: relative;
`;

const PostUser = styled.span`
  font-weight: 400;
  font-size: 19px;
  line-height: 23px;
`;

const PostComment = styled.span`
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  max-height: 52px;
  overflow: hidden;
  color: #b7b7b7;
`;

const PostBanner = styled.article`
  height: 155px;
  width: 500px;
  border: 1px solid #4d4d4d;
  border-radius: 16px;

  position: absolute;
  bottom: 0;
  left: 0;
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
  PostBanner,
};
