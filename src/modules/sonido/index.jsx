import React from "react";
import Card from "../../components/card/index";
import img from "../../assets/sonido.png";
import "./style.scss";
import { AppContext } from "../../components/Provider";

const Sonido = () => {
  const [packSelected, setPackSelected] = React.useState(undefined);

  const [context] = React.useContext(AppContext);

  return (
    <>
      <div className="sonido-container">
        <div className="list-container">
          <div className="sonido-grid">
            {!context.sonidos ? (
              <div>No hay sonidos disponibles</div>
            ) : (
              context.sonidos.map((info) => {
                return (
                  <Card
                    isSelected={packSelected === info.idSonido}
                    image={img}
                    nameService={info.nombre}
                    price={info.precioHora}
                    description={info.descripcion}
                    key={info.idSonido}
                    onClick={() => {
                      setPackSelected(info.idSonido);
                    }}
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Sonido;
