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
  const [buttonStatus, setButton] = useState(false);
  const { login } = useAuth();
  const navigation = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setButton(true);
    if (email.length === 0 || password.length === 0) {
      alert("Favor preencher todos os campos");
    }
    try {
      const { data } = await api.signIn(email, password);
      login(data);
      navigation("/timeline");
    } catch (error) {
      if (error.response.status === 401)
        alert("Email ou senha incorreto, verifique seus dados");
      else {
        alert(`Confira seus dados ou tente novamente mais tarde`);
      }
    }
    setButton(false);
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
        <Button type="Log In" disabled={buttonStatus}>
          Log In
        </Button>
        <StyledLink to="/sign-up">First time? Create an account!</StyledLink>
      </Form>
    </AuthorizationScreen>
  );
}
