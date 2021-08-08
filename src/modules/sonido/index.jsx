import React from "react";
import Card from "../../components/card/index";
import "./style.scss";
import { AppContext } from "../../components/Provider";

const Sonido = () => {
  
  const [context,setContext] = React.useContext(AppContext);

  const handleOnClickSonido = (sonido) => {
    setContext({
      ...context,
      sonidoSelected: sonido
    })

  }

  return (
    <>
      <div className="sonido-container">
        <div className="list-container">
          <div className="sonido-grid">
            {!context.sonidos ? (
              <div>No hay sonidos disponibles</div>
            ) : (
              context.sonidos.map((sonido) => {
                return (
                  <Card
                    isSelected={context.sonidoSelected?.idSonido === sonido.idSonido}
                    image={sonido.foto}
                    nameService={sonido.nombre}
                    price={sonido.precioHora}
                    description={sonido.descripcion}
                    key={sonido.idSonido}
                    onClick={() => {
                      handleOnClickSonido(sonido)
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
