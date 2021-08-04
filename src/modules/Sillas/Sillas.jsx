import React from "react";
import QuantityForm from "../../components/QuantityForm/QuantityForm";
import Button from "../../components/Button/Button";
import iconNoResults from "../../assets/icon-no-results.png";
import MenuItem from '@material-ui/core/MenuItem';
import OrderContentLayout from "../OrderContentLayout";
import "./Sillas.scss";
import CustomSelect from "../../components/CustomSelect";
import {AppContext} from "../../components/Provider/index"
import CardComponent from "../../components/card";
const Sillas = () => {
  const [sillas, setSillas] = React.useState(0);
  const [list,setList]=React.useContext(AppContext);
  console.log(list)
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
          <CustomSelect >
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
        !list ?
        <div className="no-results">
          <img src={iconNoResults} alt="No Results" />
          <h3>
            <strong>No hay resultados</strong>
          </h3>
        </div>
        :
        list.map((silla)=>{
          return(
            <CardComponent 
          image='https://www.sams.com.mx/images/product-images/img_small/000261710s.jpg'
          nameService={silla.tipo}
          price={silla.precioUnitario}
          key={silla.idSillas}
        />
          )
        })
          
        
        
      }
    />
  );
};
export default Sillas;
