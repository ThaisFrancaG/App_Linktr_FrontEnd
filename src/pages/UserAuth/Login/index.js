import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/userAuth";
import api from "../../../services/api";
import {
  Container,
  TitleScreen,
  Title,
  SubTitle,
  Form,
  Input,
  Button,
  StyledLink,
} from "../style";

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
      console.log(data);
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

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("auth"));
    if (token) navigation("/timeline");
  }, []);

  return (
    <Container>
      <TitleScreen>
        <div>
          <Title>linkr</Title>
          <SubTitle>
            save, share and discover <br /> the best links on the web
          </SubTitle>
        </div>
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
        <Button type="submit" disabled={buttonStatus}>
          Log In
        </Button>
        <StyledLink to="/sign-up">First time? Create an account!</StyledLink>
      </Form>
    </Container>
  );
}
