import { Container, Brand } from "./style";

import Logo from "../../assets/Logo_gray.svg";

export function Footer() {
  return (
    <Container>
      <Brand>
        <img src={Logo} alt="" />
        <p>food explorer</p>
      </Brand>
      <p>&#xA9; 2023 - Todos os direitos reservados.</p>
    </Container>
  );
}
