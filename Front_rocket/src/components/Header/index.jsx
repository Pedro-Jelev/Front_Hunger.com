import { Container, Brand, Hamburguer, Logout } from "./style";
import { Input } from "../Input";
import { useAuth } from "../../hooks/auth";
import { Link } from "react-router-dom";

import Logo from "../../assets/Logo.svg";
import Search from "../../assets/Search.svg";
import Receipt from "../../assets/Receipt.svg";
import SignOut from "../../assets/SignOut.svg";

export function Header({ search }) {
  const { user } = useAuth();
  const { signOut } = useAuth();

  let count = 0;

  function handleMobileMenu() {
    document.querySelector(".hamburguer").classList.toggle("active");
    document.querySelector(".sidebar").classList.toggle("active");
  }

  return (
    <Container>
      <Hamburguer className="hamburguer" onClick={handleMobileMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </Hamburguer>

      <Brand>
        <img src={Logo} />
        <h1>food explorer</h1>
        {user.isAdmin ? <span>admin</span> : ""}
      </Brand>

      <div className="sidebar">
        <Input
          icon={Search}
          placeholder="Busque por pratos ou ingredientes"
          onChange={(e) => {
            search(e.target.value);
          }}
        />
        {user.isAdmin ? (
          <Link to="/NewDish" className="mobileItem">
            Novo prato
          </Link>
        ) : (
          ""
        )}
        <Link to="/" className="mobileItem" onClick={signOut}>
          Sair
        </Link>
      </div>

      {user.isAdmin ? (
        <Link className="receipt" to="/NewDish">
          <span>Novo prato</span>
        </Link>
      ) : (
        <Link to="#">
          <img src={Receipt} />
          <span>{`Pedidos (${count})`}</span>
        </Link>
      )}

      <Logout className="signOut" to="/" onClick={signOut}>
        <img src={SignOut} />
      </Logout>

      <Link className="mobileItem" to="#">
        <span>0</span>
        <img src={Receipt} />
      </Link>
    </Container>
  );
}
