import React, { useState } from "react";

const Form = ({ list, setList }) => {
  const [input, setInput] = useState("");

  const createItem = (e) => {
    e.preventDefault();
    let nuevoArray = [...list, input];
    setList(nuevoArray);
  };

  return (
    <div>
      <form onSubmit={createItem}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Agregar a la lista!</button>
      </form>
    </div>
  );
};

export default Form;
