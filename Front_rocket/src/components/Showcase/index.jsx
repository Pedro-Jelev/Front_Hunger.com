import { Container, Token } from "./style";
import { Button } from "../Button";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { Link } from "react-router-dom";

import Pencil from "../../assets/Pencil.svg";
import HeartFill from "../../assets/HeartFill.svg";
import HeartNone from "../../assets/HeartNone.svg";
import Minus from "../../assets/Minus.svg";
import Plus from "../../assets/Plus.svg";
import { isValidElement, useState } from "react";
import { useFavorites } from "../../hooks/favorites";

export function Showcase({ data }) {
  const { user } = useAuth();
  const [quantity, setQuantity] = useState(1);
  const imageUrl = data.image
    ? `${api.defaults.baseURL}/files/${data.image}`
    : "";
  const { favorites, addDishToFavorite, removeDishFromFavorite } =
    useFavorites();
  const isFavorite = favorites.some((dish) => dish.title === data.title);

  function increase() {
    setQuantity((qtd) => qtd + 1);
  }

  function decrease() {
    quantity <= 1
      ? alert("A quantidade mínima deste prato é 1")
      : setQuantity((qtd) => qtd - 1);
  }

  return (
    <Container>
      {user.isAdmin ? (
        <Token>
          <Link to={`Details/${data.id}`}>
            <img src={Pencil} alt="pencil token" />
          </Link>
        </Token>
      ) : (
        <Token>
          <Link
            onClick={
              isFavorite
                ? removeDishFromFavorite(data)
                : addDishToFavorite(data)
            }
          >
            <img src={false ? HeartNone : HeartFill} alt="heart token" />
          </Link>
        </Token>
      )}

      <img src={imageUrl} alt="Dish" />
      <h3 className="name">{data.name} &#8250;</h3>
      <p className="description">{data.description}</p>
      <span className="price">R$ {data.price}</span>

      {!user.isAdmin ? (
        <div className="trade">
          <div>
            <img src={Minus} className="minus" onClick={decrease} />
            <span className="count">{quantity}</span>
            <img src={Plus} className="plus" onClick={increase} />
          </div>
          <Button>Incluir</Button>
        </div>
      ) : (
        ""
      )}
    </Container>
  );
}
