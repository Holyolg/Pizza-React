import React from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const FullPizza: React.FC = () => {
	const [pizza, setPizza] = React.useState<{
		imageUrl: string,
		title: string,
		price: string
	}>();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://6346ff4404a6d457579e4887.mockapi.io/PizzaItem/" + id
        );
        setPizza(data);
      } catch (error) {
        alert("ошибка при получении пипцы");
        navigate("/");
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) {
    return (
      <div className="container">
        <h2>Загрузка...</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="pizza" />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} ₽</h4>
    </div>
  );
};

export default FullPizza;
