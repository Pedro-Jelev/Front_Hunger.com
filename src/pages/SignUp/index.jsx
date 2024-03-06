import { Container, Brand, Form } from "./style.js";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { api } from "../../services/api.js";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import Logo from "../../assets/Logo.svg";

export function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignUp() {
    if (!name || !email || !password)
      return alert("Todos os campos são obrigatórios");

    if (password.length < 6) {
      return alert("A senha deve ter pelo menos 6 caracteres");
    }

    api
      .post("/users", { name, email, password })
      .then(() => alert("Usuário cadastrado com sucesso"), navigate("/"))
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar");
        }
      });
  }

  return (
    <Container className="SignUp">
      <Brand>
        <img src={Logo} />
        <h1>food explorer</h1>
      </Brand>

      <Form>
        <h2>Crie sua conta</h2>

        <div className="box-wrapper">
          <label htmlFor="email">Seu nome</label>
          <Input
            id="email"
            placeholder="Exemplo: Maria da Silva"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

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
            placeholder="No míninmo 6 caracteres"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button onClick={handleSignUp}>Criar conta</Button>
        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </Container>
  );
}
