import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/userAuth";
import api from "../../services/api";
import {
  AuthorizationScreen,
  TitleScreen,
  Title,
  SubTitle,
  Form,
  Input,
  Button,
  StyledLink,
} from "./style";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigation = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data } = await api.signIn(email, password);
      login(data);
      navigation("/");
    } catch (error) {
      console.log(error);
      alert("Algo deu errado, tente novamente em alguns segundos");
    }
  }
  return (
    <AuthorizationScreen>
      <TitleScreen>
        <Title>linkr</Title>
        <SubTitle>save, share and discover the best links on the web</SubTitle>
      </TitleScreen>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="e-mail"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          value={email}
          required
        />
        <Input
          placeholder="senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          value={password}
          required
        />
        <Button type="Log In">Log In</Button>
        <StyledLink to="/sign-up">First time? Create an account!</StyledLink>
      </Form>
    </AuthorizationScreen>
  );
}
