import React from "react";
import QuantityForm from "../../components/QuantityForm/QuantityForm";
import Button from "../../components/Button/Button";
import iconNoResults from "../../assets/icon-no-results.png";
import TextField from "@material-ui/core/TextField";
import OrderContentLayout from "../OrderContentLayout";
import "./Salon.scss";
import CardComponent from "../../components/card";
import { AppContext } from "../../components/Provider/index";
import config from "../../config";
import { useEffect } from "react";
import axios from "axios";

const Salon = () => {
  const [context, setContext] = React.useContext(AppContext);

  const handleOnClickCard = (salon) => {
    setContext({
      ...context,
      salonSelected: salon,
    });
  };

  const setPeople = (amount) => {
    setContext({
      ...context,
      peopleQuantity: amount,
    });
  };

  useEffect(() => {
    (async () => {
      if (context.dateEvent) {
        const result = await axios.post(`${config.backendURL}salones/filtro`, {
          fecha: context.dateEvent,
          capacidad: 300,
        });
        setContext({ ...context, salones: result.data.Data });
      }
    })();
    // eslint-disable-next-line
  }, [context.dateEvent]);

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
            minQuantity={50}
            setQuantity={setPeople}
            quantity={context.peopleQuantity}
          />
          <Button minWidth="100%" type="solid">
            Buscar disponibilidad
          </Button>
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
