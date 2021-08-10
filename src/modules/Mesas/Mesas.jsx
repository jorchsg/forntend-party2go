import React from "react";
import QuantityForm from "../../components/QuantityForm/QuantityForm";

import iconNoResults from "../../assets/icon-no-results.png";

import OrderContentLayout from "../OrderContentLayout";
import "./Mesas.scss";

import { AppContext } from "../../components/Provider/index";
import CardComponent from "../../components/card";

const Mesas = () => {
  const [quantity, setQuantity] = React.useState(0);
  const [context,setContext] = React.useContext(AppContext);
  const handleOnClickMesa = (mesa) => {
    setContext({
      ...context,
      mesaSelected:mesa
    })
    console.log(context.mesaSelected)
  }
  return (
    <OrderContentLayout
      selection={
        <>
          <QuantityForm
            title="Cantidad de mesas"
            minQuantity={1}
            setQuantity={setQuantity}
            quantity={quantity}
          />
        </>
      }
      results={
        context.mesas.length === 0 || context.mesas.Data ? (
          <div className="no-results">
            <img src={iconNoResults} alt="No Results" />
            <h3>
              <strong>No hay resultados</strong>
            </h3>
          </div>
        ) : (
          context.mesas.map((mesa) => {
            return (
              <CardComponent
                isSelected={context.mesaSelected?.idMesa===mesa.idMesa}
                image={`${mesa.foto}`}
                nameService={mesa.nombre}
                price={mesa.precioUnitario}
                description={mesa.descripcion}
                onClick={()=>{handleOnClickMesa(mesa)}}
                key={mesa.idMesa}
              />
            );
          })
        )
      }
    />
  );
};
export default Mesas;
