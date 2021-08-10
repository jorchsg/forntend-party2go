import React from "react";
import QuantityForm from "../../components/QuantityForm/QuantityForm";

import iconNoResults from "../../assets/icon-no-results.png";
import TextField from "@material-ui/core/TextField";
import OrderContentLayout from "../OrderContentLayout";
import "./Salon.scss";
import CardComponent from "../../components/card";
import { AppContext } from "../../components/Provider/index";
import config from "../../config";

const Salon = () => {
  const [context, setContext] = React.useContext(AppContext);

  const handleOnClickCard = (salon) => {
    setContext({
      ...context,
      salonSelected: salon,
    });
  };

  return (
    <OrderContentLayout
      selection={
        <>
          <h3>
            <strong>Elige la fecha y hora</strong>
          </h3>
          <TextField
            className="date-selector"
            onChange={(e) => {
              setContext({
                ...context,
                dateEvent: e.target.value,
              });
            }}
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <QuantityForm title="Cantidad de personas" />
         
        </>
      }
      results={
        !context ? (
          <div className="no-results">
            <img src={iconNoResults} alt="No Results" />
            <h3>
              <strong>No hay resultados</strong>
            </h3>
          </div>
        ) : (
          context?.salones.map((salon) => {
            return (
              <CardComponent
                isSelected={
                  context.salonSelected?.idSalones === salon.idSalones
                }
                key={salon.idSalones}
                image={`${config.imagesURL}/salones/${salon.idSalones}/1.jpg`}
                nameService={salon.nombre}
                price={salon.precio}
                onClick={() => handleOnClickCard(salon)}
                description={salon.descripcion}
              />
            );
          })
        )
      }
    />
  );
};
export default Salon;
