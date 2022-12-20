import { useState } from "react";

function SubCategoria({ nombre, comidas }) {
  const [isOpen, setisOpen] = useState(false);

  const handleClick = () => {
    setisOpen(!isOpen);
  };

  return (
    <div>
      <div>{nombre}</div>
      <div onClick={handleClick}>Abrir</div>
      {isOpen && (
        <div>
          {comidas.map((p) => {
            return (
              <div>
                {p.nombre} {p.precio}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SubCategoria;
