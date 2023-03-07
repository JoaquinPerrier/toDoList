import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Item from "./components/Item/Item";
import Title from "./components/Title/Title";

function App() {
  let listadoDeProductos = [];

  listadoDeProductos = JSON.parse(localStorage.getItem("toDoList"));

  console.log(listadoDeProductos);

  const [list, setList] = useState(listadoDeProductos);

  const deleteItem = (index) => {
    let newList = list.filter((el) => el != list[index]);
    localStorage.setItem("toDoList", JSON.stringify(newList));
    setList(newList);
  };

  return (
    <div>
      <Form list={list} setList={setList} />
      <div className="cuaderno">
        <Title />
        {list.map((el, index) => {
          return (
            <Item info={el} key={index} index={index} deleteItem={deleteItem} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
