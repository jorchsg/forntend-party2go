import React, { useState } from "react";
import Button from "../../components/Button/Button";
import oxxoLogo from "../../assets/oxxo-logo.png";
import paypalLogo from "../../assets/paypal.png";
import pagoLogo from "../../assets/pago-logo.png";
import "../pago/style.scss";
import { UserContext } from "../../context/UserProvider";
import { AppContext } from "../../components/Provider";
import jsPDF from "jspdf";


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
    return total
  };

  
  
  function generateRecibe  () {
    const pagoTotal=getTotal();
    console.log(pagoTotal)
    if (paymentSelected=="oxxo"){
      const doc =jsPDF('p','pt');

      doc.text(170,80,'Recibo de pago con referencia OXXO')
      doc.setFont('courier');

      //set the font type
   
      doc.addImage("https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Oxxo_Logo.svg/1200px-Oxxo_Logo.svg.png",200,90,200,100)

      doc.text(120,250,'Nombre: '+ user.nombre +" "+ user.apellidoPaterno+" "+user.apellidoMaterno)
      doc.text(120,270,'Datos de compra')
      doc.text(120,290,!context.salonSelected?('Salon: '+" "+"$"+"0"):('Salon: '+" "+"$"+context.salonSelected.precio))
      doc.text(120,310,!context.mesaSelected?('Mesas: '+" "+"$"+"0"):('Mesas: '+" "+"$"+(context.mesaSelected.precioUnitario * context.mesasQuantity)))
      doc.text(120,330,!context.sillaSelected?('Sillas: '+"$"+"0"):('Sillas: '+"$"+(context.sillaSelected.precioUnitario * context.sillasQuantity)))
      doc.text(120,350,!context.sonidoSelected?('Sonido: '+"$"+"0"):('Sonido: '+"$"+context.sonidoSelected.precioHora))
      doc.text(120,365,"--------------------------------------")
      doc.text(350,380,"Total: "+"$"+pagoTotal)
      doc.text(120,420,"Numero de referencia de pago:")
      doc.text(120,440,"13213543510313121321")

      




      
      
      doc.save("referenciaOxxo.pdf")
    }
    else if (paymentSelected=="paypal"){
      const doc =jsPDF('p','pt');

      doc.text(170,80,'Recibo de pago con referencia Paypal')
      doc.setFont('courier');

      //set the font type
   
      doc.addImage("https://www.actualidadecommerce.com/wp-content/uploads/2020/10/paypal.png",200,90,200,100)

      doc.text(120,250,'Nombre: '+ user.nombre +" "+ user.apellidoPaterno+" "+user.apellidoMaterno)
      doc.text(120,270,'Datos de compra')
      doc.text(120,290,!context.salonSelected?('Salon: '+" "+"$"+"0"):('Salon: '+" "+"$"+context.salonSelected.precio))
      doc.text(120,310,!context.mesaSelected?('Mesas: '+" "+"$"+"0"):('Mesas: '+" "+"$"+(context.mesaSelected.precioUnitario * context.mesasQuantity)))
      doc.text(120,330,!context.sillaSelected?('Sillas: '+"$"+"0"):('Sillas: '+"$"+(context.sillaSelected.precioUnitario * context.sillasQuantity)))
      doc.text(120,350,!context.sonidoSelected?('Sonido: '+"$"+"0"):('Sonido: '+"$"+context.sonidoSelected.precioHora))
      doc.text(120,365,"--------------------------------------")
      doc.text(350,380,"Total: "+"$"+pagoTotal)
      doc.text(120,420,"Numero de referencia de pago:")
      doc.text(120,440,"13213543510313121321")

      




      
      
      doc.save("referenciaPaypal.pdf")
    }else if(paymentSelected==undefined){
      alert("You need to select a Payment Method")
    }


  }
  
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
            <Button onClick={generateRecibe}>Confirmar solicitud</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pago;
