import React, { useState } from "react";
import { useNavigate } from "react-router";
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

function SignUp() {
  const [buttonStatus, setButton] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    pictureUrl: "",
  });
  const navigate = useNavigate();

  function handleChange({ target }) {
    setFormData({ ...formData, [target.name]: target.value });
  }

  async function handleSignUp(e) {
    e.preventDefault();
    setButton(true);

    const user = { ...formData };

    try {
      await api.signUp(user);
      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Erro, tente novamente");
    }

    setButton(true);
  }

  return (
    <AuthorizationScreen>
      <TitleScreen>
        <Title>linkr</Title>
        <SubTitle>save, share and discover the best links on the web</SubTitle>
      </TitleScreen>
      <Form onSubmit={handleSignUp}>
        <Input
          placeholder="e-mail"
          type="email"
          onChange={(e) => handleChange(e)}
          name="email"
          value={formData.email}
          required
        />
        <Input
          placeholder="password"
          type="password"
          onChange={(e) => handleChange(e)}
          name="password"
          value={formData.password}
          required
        />
        <Input
          placeholder="username"
          type="text"
          onChange={(e) => handleChange(e)}
          name="username"
          value={formData.username}
          required
        />
        <Input
          placeholder="picture url"
          type="text"
          onChange={(e) => handleChange(e)}
          name="picture url"
          value={formData.pictureUrl}
          required
        />
        <Button type="submit" disabled={buttonStatus}>
          Sign Up
        </Button>
        <StyledLink to="/">Switch back to login in</StyledLink>
      </Form>
    </AuthorizationScreen>
  );
}

export default SignUp;
