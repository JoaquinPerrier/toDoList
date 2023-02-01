import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Item from "./components/Item/Item";
import Title from "./components/Title/Title";

function App() {
  const [list, setList] = useState([
    "Ir al super",
    "Pagar alquiler",
    "Comprar fruta",
    "Llevar tele a reparar",
  ]);

  const deleteItem = (key) => {
    console.log(key);
    // setList((current) =>
    //   current.filter((item) => item.id != 2)
    // );
  };

  return (
    <div>
      <Form list={list} setList={setList} />
      <div className="cuaderno">
        <Title />
        {list.map((el, index) => {
          return <Item info={el} key={index} handleDelete={deleteItem} />;
        })}
      </div>
    </div>
  );
}

export default App;
