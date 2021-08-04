import React from "react";
import QuantityForm from "../../components/QuantityForm/QuantityForm";
import Button from "../../components/Button/Button";
import iconNoResults from "../../assets/icon-no-results.png";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import OrderContentLayout from "../OrderContentLayout";
import "./Mesas.scss";
import CustomSelect from "../../components/CustomSelect";
import { AppContext } from "../../components/Provider/index";
import { Card } from "@material-ui/core";
import CardComponent from "../../components/card";

const Mesas = () => {
  const [quantity, setQuantity] = React.useState(0);
  const [mesas, setMesas] = React.useContext(AppContext);

  //Avoid throw error 'map is not a function'
  if (mesas.Data !== undefined) return;
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
          <h3>Tipo de mesa</h3>
          <CustomSelect>
            <MenuItem value="1">Ergonomica</MenuItem>
            <MenuItem value="2">Plegable</MenuItem>
            <MenuItem value="3">Infantil</MenuItem>
          </CustomSelect>
          <Button minWidth="100%" type="solid">
            Buscar mesa
          </Button>
        </>
      }
      results={
        !mesas || mesas.Data ? (
          <div className="no-results">
            <img src={iconNoResults} alt="No Results" />
            <h3>
              <strong>No hay resultados</strong>
            </h3>
          </div>
        ) : (
          mesas?.map((mesas) => {
            return (
              <CardComponent
                image="https://i.pinimg.com/originals/74/0d/3c/740d3cb46defdc6f828a6210709ff954.jpg"
                nameService={mesas.nombre}
                price={mesas.precioUnitario}
                key={mesas.idMesa}
              />
            );
          })
        )
      }
    />
  );
};
export default Mesas;
