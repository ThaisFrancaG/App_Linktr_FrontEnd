import React, { useState } from "react";
import { useNavigate } from "react-router";
import api from "../../services/api";
import {
  Container,
  TitleScreen,
  Title,
  SubTitle,
  Form,
  Input,
  Button,
  StyledLink,
} from "./style";

function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);

    const user = { ...formData };

    Object.keys(user).forEach((item) => {
      if (!user[item]) {
        alert("Todos os campos precisam estar preenchidos");
      }
    });

    try {
      await api.signUp(user);
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      if (error.response.status === 409) {
        alert("E-mail já cadastrado");
        setIsLoading(false);
      }
      console.log(error);
      alert("Erro, tente novamente");
    }
  }

  return (
    <Container>
      <TitleScreen>
        <div>
          <Title>linkr</Title>
          <SubTitle>
            save, share and discover <br />
            the best links on the web
          </SubTitle>
        </div>
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
          name="pictureUrl"
          value={formData.pictureUrl}
          required
        />
        <Button type="submit" disabled={isLoading}>
          Sign Up
        </Button>
        <StyledLink to="/">Switch back to login in</StyledLink>
      </Form>
    </Container>
  );
}

export default SignUp;
