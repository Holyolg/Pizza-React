import React, { useState } from "react";

function Categories({ value, onChangeCategory }) {
  const categorise = [
    "Все",
    "Мясные",
    "Вегетарианские",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  return (
    <div className="categories">
      <ul>
        {categorise.map((categoryName, i) => (
          <li
            key={i}
            // не уникальный ключ, потому что статичный categorise
            onClick={() => onChangeCategory(i, 2, 3)}
            className={value === i ? "active" : ""}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Categories;
