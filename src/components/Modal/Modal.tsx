import React from "react";
import styles from "./Modal.module.scss";
import Cooking from "../../assets/img/empty-cart.gif";

interface ModalOpen {
  open: any;
  setOpen: any;
}

export const Modal: React.FC<ModalOpen> = ({ open, setOpen }) => {
  const [value, setValue] = React.useState("+7");
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div
      className={
        open
          ? styles.wrapper + " " + styles.show
          : styles.wrapper + " " + styles.animated
      }>
      <div className={styles.modal}>
        <div className={styles.container}>
          <h2>Мы уже готовим ваш заказ</h2>
          <h3>Оставьте номер телефона, чтобы мы могли с вами связаться</h3>

          <input value={value} type="text" onChange={onChangeInput}></input>
          <button
            className="button button--black"
            onClick={() => setOpen(false)}>
            <span>Отправить</span>
          </button>
          <img src={Cooking} alt="готовим"></img>

          <button
            className="button button--black"
            onClick={() => setOpen(false)}>
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
          </button>
        </div>
      </div>
    </div>
  );
};
