import React from "react";
import QuantityForm from "../../components/QuantityForm/QuantityForm";
import Button from "../../components/Button/Button";
import iconNoResults from "../../assets/icon-no-results.png";
import TextField from "@material-ui/core/TextField";
import MenuItem from '@material-ui/core/MenuItem';
import OrderContentLayout from "../OrderContentLayout";
import "./Mesas.scss";
import CustomSelect from "../../components/CustomSelect";
import { AppContext } from "../../components/Provider/index";
import { Card } from "@material-ui/core";
import CardComponent from "../../components/card";

const Mesas = () => {
  const [mesas, setMesas] = React.useState(0);
  const [listM,setListM]= React.useContext(AppContext);
  console.log(listM)
  return (
    <OrderContentLayout
      selection={
        <>
          <QuantityForm
            title="Cantidad de mesas"
            minQuantity={1}
            setQuantity={setMesas}
            quantity={mesas}
          />
          <h3>Tipo de mesa</h3>
          <CustomSelect >
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
        !listM ?
        <div className="no-results">
          <img src={iconNoResults} alt="No Results" />
          <h3>
            <strong>No hay resultados</strong>
          </h3>
        </div>
         :
        listM.map((mesas)=>{
          return(
            <CardComponent
              
              nameService={mesas.nombre}
              price={mesas.precioUnitario}
              key={mesas.idMesa}
            />
          )
        })
        
      }
    />
  );
};
export default Mesas;
