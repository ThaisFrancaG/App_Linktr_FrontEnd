import React, { useState } from "react";
import { AuthorizationScreen, TitleScreen, Title, SubTitle } from "./style";
export default function Login() {
  return (
    <AuthorizationScreen>
      <TitleScreen>
        <Title>linkr</Title>
        <SubTitle>save, share and discover the best links on the web</SubTitle>
      </TitleScreen>
    </AuthorizationScreen>
  );
}
