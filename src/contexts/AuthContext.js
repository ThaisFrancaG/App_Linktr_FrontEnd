import { createContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  alert("passei aqui");
  console.log(children);
  const persistedAuth = JSON.parse(localStorage.getItem("auth"));
  const [auth, setAuth] = useState(persistedAuth);
  //com isso, o auth fica salvo como token direto no local storage, que ai dá pra chamar de lá
  function login(authData) {
    setAuth(authData);
    localStorage.setItem("auth", JSON.stringify(authData));
  }

  return (
    <AuthContext.Provider value={{ auth, login }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
