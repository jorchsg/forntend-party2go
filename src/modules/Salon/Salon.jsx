import React from "react";
import QuantityForm from "../../components/QuantityForm/QuantityForm";
import Button from "../../components/Button/Button";
import iconNoResults from "../../assets/icon-no-results.png";
import TextField from "@material-ui/core/TextField";
import OrderContentLayout from "../OrderContentLayout";
import "./Salon.scss";
import { useEffect } from "react";
import axios from "axios";
import config from "../../config";
import CardComponent from "../../components/card";

const Salon = () => {
  const [people, setPeople] = React.useState(0);
  const [salones, setSalones] = React.useState(undefined);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`${config.backendURL}salones`);
        setSalones(response.data.Data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
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
        !salones ? (
          <div className="no-results">
            <img src={iconNoResults} alt="No Results" />
            <h3>
              <strong>No hay resultados</strong>
            </h3>
          </div>
        ) : (
          salones.map((salon) => {
            return (
              <CardComponent
                key={salon.idSalones}
                image={
                  "https://i.ibb.co/dbJDXr0/865f3d-e348d669e70547ffb7d8021a2bfc932e-mv2.webp"
                }
                nameService={salon.nombre}
                price={salon.precio}
                isSelected={false}
                onClick={(e) => console.log(e)}
                description={""}
              />
            );
          })
        )
      }
    />
  );
};
export default Salon;
