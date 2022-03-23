import React, { useState, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/userAuth";
import api from "../../services/api";
import {
  HeaderComponent,
  LogoutButton,
  ProfileComponent,
  ProfileImg,
  Title,
} from "./TimelineStyles";

import {
  PostContainer,
  WriteContainer,
  ReadContainer,
  ProfileContainer,
  InfoContainer,
  PostComment,
  PostUser,
  PostBanner,
  FormContainer,
  FormTitle,
  Input,
  Button,
} from "./PostStyle";
function Header(props) {
  const [showLogout, setActive] = useState(false);
  const navigation = useNavigate();

  async function handleLogOut() {
    const token = JSON.parse(localStorage.getItem("auth"));
    try {
      await api.logOut(token);
    } catch (error) {
      if (error.response.status === 401) {
        alert("Email ou senha incorreto, verifique seus dados");
        return;
      } else {
        alert(`Confira seus dados ou tente novamente mais tarde`);
        return;
      }
    }
    localStorage.removeItem("auth");
    navigation("/");
  }

  return (
    <HeaderComponent>
      <Title>linktr</Title>
      <ProfileComponent onClick={() => setActive(!showLogout)}>
        {showLogout ? <IoIosArrowUp /> : <IoIosArrowDown />}
        <ProfileImg
          src="https://hiperideal.vteximg.com.br/arquivos/ids/167660-1000-1000/27502.jpg?v=636615816147030000"
          alt="profile pic"
        ></ProfileImg>
      </ProfileComponent>
      {showLogout ? (
        <LogoutButton onClick={() => handleLogOut()}>Logout</LogoutButton>
      ) : (
        <></>
      )}
    </HeaderComponent>
  );
}

function Timeline() {
  const { auth } = useAuth();

  const [postUrl, setUrl] = useState("");
  const [comment, setComment] = useState("");
  const [buttonStatus, setButton] = useState(false);

  //tem que ter um ponto de início para dar o get nas informações de usuário, conferir os roles, e pegar as imagens, além de conferir as informações de back. Nesse caso, talvez seja melhor começar pelo back
  function sendPost(e) {
    alert("Chamou aqui");
    console.log(postUrl);
    console.log(comment);
  }
  return (
    <>
      <Header />
      <PostContainer>
        <WriteContainer>
          <ProfileContainer>
            <img src="" alt="profile pic" />
          </ProfileContainer>

          <InfoContainer>
            <FormTitle>What are you going to share today?</FormTitle>
            <FormContainer onSubmit={sendPost}>
              <Input
                inputLabel="url"
                placeholder="http://..."
                type="url"
                onChange={(e) => setUrl(e.target.value)}
                name="post url"
                value={postUrl}
                required
              />
              <Input
                placeholder="Awesome article about #javascript"
                type="text"
                onChange={(e) => setComment(e.target.value)}
                name="post comment"
                value={comment}
                required
              />
              <Button type="submit" disabled={buttonStatus}>
                Publish
              </Button>
            </FormContainer>
          </InfoContainer>
        </WriteContainer>
        <ReadContainer>
          <ProfileContainer>
            <img src="" alt="profile pic" />
          </ProfileContainer>
          <InfoContainer>
            <PostUser>Titulo</PostUser>
            <PostComment>
              SubTitulo SubTitulo SubTitul SubTitul SubTitul SubTitul SubTitul
              SubTitul SubTitul SubTitul SubTitul SubTitul SubTitul SubTitul
            </PostComment>
            <PostBanner>ahaaaaaa</PostBanner>
          </InfoContainer>
        </ReadContainer>
      </PostContainer>
    </>
  );
}

export default Timeline;
