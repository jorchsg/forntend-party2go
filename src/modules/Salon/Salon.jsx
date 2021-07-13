import React from "react";
import QuantityForm from "../../components/QuantityForm/QuantityForm";
import Button from "../../components/Button/Button";
import iconNoResults from "../../assets/icon-no-results.png";
import TextField from "@material-ui/core/TextField";
import OrderContentLayout from "../OrderContentLayout";
import "./Salon.scss";

const Salon = () => {
  const [people, setPeople] = React.useState(0);

  return (
    <OrderContentLayout
      selection={
        <>
          <h3>
            <strong>Elige la fecha y hora</strong>
          </h3>
          <TextField
            className="date-selector"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            className="hour-selector"
            type="time"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
          />
          
          <QuantityForm
            title="Cantidad de personas"
            minQuantity={1}
            setQuantity={setPeople}
            quantity={people}
          />
          <Button minWidth="100%" type="solid">
            Buscar disponibilidad
          </Button>
        </>
      }
      results={
        <div className="no-results">
          <img src={iconNoResults} alt="No Results" />
          <h3>
            <strong>No hay resultados</strong>
          </h3>
        </div>
      }
    />
  );
};
export default Salon;
