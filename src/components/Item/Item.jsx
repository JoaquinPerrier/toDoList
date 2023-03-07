import React from "react";
import styles from "./item.module.css";

const Item = ({ info, index, deleteItem }) => {
  const handleClick = () => {
    deleteItem(index);
  };

  return (
    <div className={styles.container}>
      <h4 className={styles.items}>• {info}</h4>
      <button className={styles.boton} onClick={handleClick} index={index}>
        Quitar del listado!
      </button>
    </div>
  );
};

export default Item;
