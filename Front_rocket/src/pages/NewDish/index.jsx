import { Container, Main } from "./style";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Ingredients } from "../../components/Ingredients";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import CaretLeft from "../../assets/CaretLeft.svg";
import Download from "../../assets/Download.svg";

export function NewDish() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  function handleAddIngredient() {
    if (newIngredient.length < 3) {
      return alert(
        "Erro: Você está tentando inserir um nome de ingrediente inválido!",
      );
    } else {
      setIngredients((prevState) => [...prevState, newIngredient]);
      setNewIngredient("");
    }
  }

  function handleRemoveIngredient(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted),
    );
  }

  async function handleNewDish() {
    if (!image) return alert("Error: Anexe uma imagem para o prato.");
    if (!name) return alert("Todos os campos precisam ser preenchidos");
    if (!description) return alert("Todos os campos precisam ser preenchidos");
    if (!price) return alert("Todos os campos precisam ser preenchidos");
    if (!category) return alert("Todos os campos precisam ser preenchidos");
    if (ingredients.length < 1)
      return alert("Todos os campos precisam ser preenchidos");
    if (newIngredient) return alert("Termine de adicionar o novo ingrediente");

    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("price", price);
    ingredients.map((ingredient) => formData.append("ingredients", ingredient));

    await api
      .post("/dishes", formData)
      .then(alert("Prato adicionado com sucesso"), navigate("/"))
      .catch((error) => {
        if (error.res) {
          alert(error.res.data.message);
        } else {
          alert("Erro: Não foi possível adicionar o prato, tente novamente");
        }
      });
  }

  return (
    <Container>
      <Header />

      <a href="/" className="back">
        <img src={CaretLeft} />
        voltar
      </a>

      <Main>
        <h2>Adicionar prato</h2>

        <div className="row first">
          <div className="box-wrapper">
            <label htmlFor="imageDish">Imagem do prato</label>
            <label htmlFor="imageDish" className="upload">
              <img src={Download} />
              Selecione imagem
            </label>
            <Input
              type="file"
              id="imageDish"
              name="imageDish"
              acept="image/*"
              className="sr-only"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <div className="box-wrapper">
            <label htmlFor="name">Nome</label>
            <Input
              type="text"
              id="name"
              placeholder="Ex.: Salada Ceasar"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="box-wrapper">
            <label htmlFor="category">Categoria</label>
            <select
              name="category"
              id="category"
              defaultValue="default"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="default" disabled>
                Selecionar categoria
              </option>
              <option value="Refeição">Refeição</option>
              <option value="Bebida">Bebida</option>
              <option value="Sobremesa">Sobremesa</option>
            </select>
          </div>
        </div>

        <div className="row second">
          <div className="box-wrapper">
            <label htmlFor="">Ingredientes</label>
            <div className="ingredients">
              {ingredients.map((ingredient, index) => (
                <Ingredients
                  key={String(index)}
                  value={ingredient}
                  onClick={() => handleRemoveIngredient(ingredient)}
                />
              ))}

              <Ingredients
                placeholder="Adicionar"
                isNew
                value={newIngredient}
                onChange={(e) => setNewIngredient(e.target.value)}
                onClick={handleAddIngredient}
              />
            </div>
          </div>
          <div className="box-wrapper">
            <label htmlFor="price">Preço</label>
            <Input
              type="text"
              id="price"
              value={price}
              placeholder="R$ 00,00"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="box-wrapper">
            <label htmlFor="description">Descrição</label>
            <textarea
              title="description"
              id="description"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
        </div>

        <Button className="submit" onClick={handleNewDish}>
          Salvar alterações
        </Button>
      </Main>

      <Footer />
    </Container>
  );
}
