import { SwiperSlide } from "swiper/react";
import { Container, Advertising } from "./style";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Category } from "../../components/Category";
import { Showcase } from "../../components/Showcase";
import { api } from "../../services/api";
import { useState, useEffect } from "react";

import Adv from "../../assets/Adv.png";

export function Home() {
  const [dishes, setDisehs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetch() {
      const res = await api.get(`/dishes?name=${search}`);
      setDisehs(res.data);
    }

    fetch();
  }, [search]);

  return (
    <Container>
      <Header search={setSearch} />

      <Advertising>
        <img src={Adv} />

        <div className="content">
          <h2>Sabores inigualáveis</h2>
          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </div>
      </Advertising>

      <Category type="Refeição">
        {dishes
          .filter((dish) => dish.category == "Refeição")
          .map((dish) => (
            <SwiperSlide key={String(dish.id)}>
              <Showcase data={dish} />
            </SwiperSlide>
          ))}
      </Category>

      <Category type="Bebidas">
        {dishes
          .filter((dish) => dish.category == "Bebida")
          .map((dish) => (
            <SwiperSlide key={String(dish.id)}>
              <Showcase data={dish} />
            </SwiperSlide>
          ))}
      </Category>

      <Category type="Sobremesas">
        {dishes
          .filter((dish) => dish.category == "Sobremesa")
          .map((dish) => (
            <SwiperSlide key={String(dish.id)}>
              <Showcase data={dish} />
            </SwiperSlide>
          ))}
      </Category>
      <Footer />
    </Container>
  );
}
