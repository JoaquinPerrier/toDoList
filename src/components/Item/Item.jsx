import React from "react";
import styles from "./item.module.css";

const Item = ({ info, index }) => {
  const deleteItem = (e) => {
    console.log(e);
    e.preventDefault();
    // setList((current) =>
    //   current.filter((item) => item.id != 2)
    // );
  };
  return (
    <div className={styles.container}>
      <h4 className={styles.items}>• {info}</h4>
      <button className={styles.boton} onClick={deleteItem}>
        Quitar del listado!
      </button>
    </div>
  );
};

export default Item;
