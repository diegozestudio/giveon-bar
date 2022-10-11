import React, { useEffect, useState } from "react";

function CategorieFood({categorieName, comidas}) {
  const [comidasFiltradas, setComidasFiltradas] = useState();

  useEffect(() => {
    setComidasFiltradas(
      comidas.filter((comida) => comida.categoria === categorieName)
    );
  }, []);

  return (
    <>
      <h2>{categorieName}:</h2>
      {comidasFiltradas?.map(comida=> {
        return (
            <div>{comida.nombre}</div>
        )
      })}
    </>
  );
}

export default CategorieFood;
