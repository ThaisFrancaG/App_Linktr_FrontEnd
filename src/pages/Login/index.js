import React, { useState } from "react";
import { Link } from "react-router-dom";
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

  console.log(email);
  async function handleSubmit(e) {
    e.preventDefault();
    console.log("submit was called");
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
