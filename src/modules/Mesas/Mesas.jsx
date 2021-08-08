import React from "react";
import QuantityForm from "../../components/QuantityForm/QuantityForm";
import Button from "../../components/Button/Button";
import iconNoResults from "../../assets/icon-no-results.png";
import MenuItem from "@material-ui/core/MenuItem";
import OrderContentLayout from "../OrderContentLayout";
import "./Mesas.scss";
import CustomSelect from "../../components/CustomSelect";
import { AppContext } from "../../components/Provider/index";
import CardComponent from "../../components/card";

const Mesas = () => {
  const [quantity, setQuantity] = React.useState(0);
  const [context] = React.useContext(AppContext);

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
        context.mesas.length === 0 || context.mesas.Data ? (
          <div className="no-results">
            <img src={iconNoResults} alt="No Results" />
            <h3>
              <strong>No hay resultados</strong>
            </h3>
          </div>
        ) : (
          context?.mesas?.map((mesa) => {
            return (
              <CardComponent
                image={`${mesa.foto}`}
                nameService={mesa.nombre}
                price={mesa.precioUnitario}
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
