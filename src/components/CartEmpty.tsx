import React from "react";
import { Link } from "react-router-dom";

import CartEmptyImg from "../assets/img/empty-cart.gif";

const CartEmpty: React.FC = () => {
  return (
    <div className="cart cart--empty">
      <h2>Корзина пустая 😕</h2>
      <p>
        Вероятней всего, вы еще не заказывали пипцу.
        <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img src={CartEmptyImg} alt="Empty cart" />
      <Link to="/PizzaTime" className="button button--black">
        <svg
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7 13L1 6.93015L6.86175 1"
            stroke="#D3D3D3"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"></path>
        </svg>
        <span>Вернуться назад</span>
      </Link>
    </div>
  );
};
export default CartEmpty;
