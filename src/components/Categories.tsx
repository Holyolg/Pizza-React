import React from "react";

type CategoriesProps = {
  value: number;
  onChangeCategory: (id: number) => void;
};

const Categories: React.FC<CategoriesProps> = React.memo(
  ({ value, onChangeCategory }) => {
    const categorise = [
      "Все",
      "Мясные",
      "Вегетарианские",
      "Гриль",
      "Острые",
      "Микс",
    ];
    return (
      <div className="categories">
        <ul>
          {categorise.map((categoryName, id) => (
            <li
              key={id}
              // не уникальный ключ, потому что статичный categorise
              onClick={() => onChangeCategory(id)}
              className={value === id ? "active" : ""}>
              {categoryName}
            </li>
          ))}
        </ul>
      </div>
    );
  }
);

export default Categories;
