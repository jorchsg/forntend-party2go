import React, { useState } from "react";
import Button from "../../components/Button/Button";
import oxxoLogo from "../../assets/oxxo-logo.png";
import paypalLogo from "../../assets/paypal.png";
import pagoLogo from "../../assets/pago-logo.png";
import "../pago/style.scss";
import { UserContext } from "../../context/UserProvider";
import { AppContext } from "../../components/Provider";

const Pago = () => {
  const [paymentSelected, setPaymentSelected] = useState(undefined);
  // const [editingInfo, setEditingInfo] = useState(false);
  // const [editingAddr, setEditingAddr] = useState(false);
  const [context]=React.useContext(AppContext);
  const [user]=React.useContext(UserContext);

  const getTotal = () => {
    let total = 0;
    //Salon
    if (context.salonSelected) {
      total = total + parseFloat(context.salonSelected.precio);
    }
    //Mesas
    if (context.mesaSelected) {
      total = total + parseFloat(context.mesaSelected.precioUnitario * context.mesasQuantity);
    }
    //Mesas
    if (context.sillaSelected) {
      total = total + parseFloat(context.sillaSelected.precioUnitario * context.sillasQuantity);
    }
    //Sonido
    if (context.sonidoSelected) {
      total = total + parseFloat(context.sonidoSelected.precioHora);
    }
    return total;
  };

  
  return (
    <>
      <div className="pago-container">
        <div className="right-container">
          <div className="select-paymethod">
            <h3 className="title">Selecciona el tipo de pago</h3>
            <div className="buttons-selectables">
              <div className="container-btn">
                <Button
                  onClick={() => setPaymentSelected("oxxo")}
                  className={paymentSelected === "oxxo" && "payment-selected"}
                  type="oxxo"
                >
                  <img src={oxxoLogo} alt="oxxo" />
                </Button>
                <p>Paga en Oxxo</p>
              </div>
              <div className="container-btn">
                <Button
                  onClick={() => setPaymentSelected("paypal")}
                  className={paymentSelected === "paypal" && "payment-selected"}
                  type="paypal"
                >
                  <img src={paypalLogo} alt="paypal" />
                </Button>
                <p>Paga con paypal</p>
              </div>
            </div>
          </div>
          <div className="confirm-data">
            <h3 className="title">Confirma tus datos</h3>
            <div className="data">
              <div className="data-info">
                <p>{user.nombre +" "+ user.apellidoPaterno+" "+user.apellidoMaterno}</p>
                <p>{user.telefono}</p>
                <p>{user.correo}</p>
              </div>
              <div className="editar">
                <a href="#Edit">Editar</a>
              </div>
            </div>
          </div>
          <div className="confirm-direction">
            <h3 className="title">Direccion del Evento</h3>
            <div className="direction">
              <div className="direction-info">
                {!context.salonSelected ?

                <p>
                  {user.calle+" "+ user.numInterior+","+" "+user.numExterior+","+" "+user.colonia+","+" "+ user.cp +","+" "+ user.ciudad+","+" "+user.estado+","+" "+"México"}
                </p>
                :
                <p>
                  {context.salonSelected.direccionSalon}
                </p>
                }
              </div>
              <div className="editar">
                <a href="#Edit">Editar</a>
              </div>
            </div>
          </div>
        </div>

        <div className="left-container">
          <div className="logo-fiesta">
            <img src={pagoLogo} alt="" />
            <h3>Fiesta de Nombre</h3>
          </div>
          <div className="pay-list">
            <h5>Servicio</h5>
            <div className="list">
              <div className="concepto">
                <p>Salon</p>
                {
                  !context.salonSelected ?
                  <p>{"$"+"0"}</p>
                  :
                  <p>{"$"+context.salonSelected.precio}</p>
                }
                
              </div>
              <div className="concepto">
                <p>Mesas</p>
                {
                  !context.mesaSelected ?
                  <p>{"$"+"0"}</p>
                  :
                  <p>{"$"+(context.mesaSelected.precioUnitario * context.mesasQuantity)}</p>
                }
              </div>
              <div className="concepto">
                <p>Sillas</p>
                {
                  !context.sillaSelected ?
                  <p>{"$"+"0"}</p>
                  :
                  <p>{"$"+(context.sillaSelected.precioUnitario * context.sillasQuantity)}</p>
                }
              </div>
              <div className="concepto">
                <p>Sonido</p>
                {
                  !context.sonidoSelected ?
                  <p>{"$"+"0"}</p>
                  :
                  <p>{"$"+context.sonidoSelected.precioHora}</p>
                }
              </div>
            </div>
          </div>
          <div className="conceptoTotal">
            <h5>Total</h5>
            <h4>{"$"+getTotal()}</h4>
          </div>
          <div className="confirm-button">
            <Button>Confirmar solicitud</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pago;
