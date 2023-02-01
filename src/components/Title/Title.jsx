import React from "react";

const Title = () => {
  const date = new Date();

  const weekday = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];

  const month = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  return (
    <h1>
      <i>
        {` ${weekday[date.getDay()]} ${date.getDay()} de ${
          month[date.getMonth()]
        }`}
      </i>
    </h1>
  );
};

export default Title;
