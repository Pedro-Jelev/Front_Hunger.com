import { Container, Main } from "./style";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { Tag } from "../../components/Tag";
import { useAuth } from "../../hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Link } from "react-router-dom";

import CaretLeft from "../../assets/CaretLeft.svg";
import Minus from "../../assets/Minus.svg";
import Plus from "../../assets/Plus.svg";

export function Details() {
  const { user } = useAuth();
  const params = useParams();
  const [data, setData] = useState({ ingredients: [] });
  const imageURL = data && `${api.defaults.baseURL}/files/${data.image}`;
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  function increase() {
    setQuantity((qtd) => qtd + 1);
  }

  function decrease() {
    quantity <= 1
      ? alert("A quantidade mínima deste prato é 1")
      : setQuantity((qtd) => qtd - 1);
  }

  function editDish() {
    navigate(`/EditDish/${params.id}`);
  }

  useEffect(() => {
    async function fetchDishDetail() {
      const res = await api.get(`/dishes/${params.id}`);
      setData(res.data);
    }
    fetchDishDetail();
  }, []);

  return (
    <Container>
      <Header />

      <Link className="back" to="/">
        <img src={CaretLeft} />
        voltar
      </Link>

      <Main>
        <img src={imageURL} alt="Dish image" />

        <div>
          <h3 className="name">{data.name}</h3>
          <p className="description">{data.description}</p>

          <div className="tags">
            {data.ingredients.map((ingredient) => (
              <Tag key={String(ingredient.id)} ingredient={ingredient.name} />
            ))}
          </div>

          {user.isAdmin ? (
            <Button onClick={editDish}>Editar prato</Button>
          ) : (
            <div className="trade">
              <img src={Minus} className="minus" onClick={decrease} />
              <span className="count">{quantity}</span>
              <img src={Plus} className="plus" onClick={increase} />
              <Button>Incluir * R$ 25,00</Button>
            </div>
          )}
        </div>
      </Main>

      <Footer />
    </Container>
  );
}
