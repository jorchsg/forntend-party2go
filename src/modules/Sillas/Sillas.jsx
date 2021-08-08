import React from "react";
import QuantityForm from "../../components/QuantityForm/QuantityForm";
import Button from "../../components/Button/Button";
import iconNoResults from "../../assets/icon-no-results.png";
import MenuItem from "@material-ui/core/MenuItem";
import OrderContentLayout from "../OrderContentLayout";
import "./Sillas.scss";
import CustomSelect from "../../components/CustomSelect";
import { AppContext } from "../../components/Provider/index";
import CardComponent from "../../components/card";
const Sillas = () => {
  const [sillas, setSillas] = React.useState(0);
  const [context,setContext] = React.useContext(AppContext);
  
  const handleOnClickSilla = (silla) =>{
    setContext({
      ...context,
      sillaSelected:silla
    })
  }
  console.log(context);
  return (
    <OrderContentLayout
      selection={
        <>
          <QuantityForm
            title="Cantidad de sillas"
            minQuantity={1}
            setQuantity={setSillas}
            quantity={sillas}
          />
          <h3>Tipo de silla</h3>
          <CustomSelect>
            <MenuItem value="1">Ergonomica</MenuItem>
            <MenuItem value="2">Plegable</MenuItem>
            <MenuItem value="3">Infantil</MenuItem>
          </CustomSelect>
          <Button minWidth="100%" type="solid">
            Buscar silla
          </Button>
        </>
      }
      results={
        context.sillas.length === 0 ? (
          <div className="no-results">
            <img src={iconNoResults} alt="No Results" />
            <h3>
              <strong>No hay resultados</strong>
            </h3>
          </div>
        ) : (
          context.sillas.map((silla) => {
            return (
              <CardComponent
                isSelected={context.sillaSelected?.idSillas === silla.idSillas}
                onClick={()=>{
                  handleOnClickSilla(silla)
                }}
                image={silla.foto}
                nameService={silla.tipo}
                price={silla.precioUnitario}
                description={silla.descripcion}
                key={silla.idSillas}
              />
            );
          })
        )
      }
    />
  );
};
export default Sillas;
