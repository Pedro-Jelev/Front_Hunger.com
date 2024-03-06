import { Link } from "react-router-dom";
import { useState } from "react";
import { Container, Brand, Form } from "./style";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { useAuth } from "../../hooks/auth";

import Logo from "../../assets/Logo.svg";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();

  async function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <Brand>
        <img src={Logo} />
        <h1>food explorer</h1>
      </Brand>

      <Form>
        <h2>Faça login</h2>

        <div className="box-wrapper">
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="box-wrapper">
          <label htmlFor="password">Senha</label>
          <Input
            id="password"
            type="password"
            placeholder="No míninmo 6 caracteres"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button onClick={handleSignIn}>Entrar</Button>

        <Link to="/register">Criar uma conta</Link>
      </Form>
    </Container>
  );
}
