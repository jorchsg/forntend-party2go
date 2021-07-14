import React from 'react';
import Button from '../../components/Button/Button'
import oxxoLogo from '../../assets/oxxo-logo.png'
import paypalLogo from '../../assets/paypal.png'
import pagoLogo from '../../assets/pago-logo.png';

import '../pago/style.scss'
import { Container } from '@material-ui/core';
const Pago = () => {
    

    const [paymentSelected,setPaymentSelected]=React.useState(undefined);
    
    





    return(
        <>
            <div className="pago-container">

                <div className="right-container">
                    <div className="select-paymethod">
                        <h3 className="title">Selecciona el tipo de pago</h3>
                        <div className="buttons-selectables">
                            <div className="container-btn">
                                <Button onClick={()=>setPaymentSelected("oxxo")} className={(paymentSelected=="oxxo")&&'payment-selected'}  type="oxxo"><img src={oxxoLogo} alt="oxxo" /></Button>
                                <p>Paga en Oxxo</p>
                            </div>
                            <div className="container-btn">
                                <Button onClick={()=>setPaymentSelected("paypal")} className={(paymentSelected=="paypal")&&'payment-selected'} type="paypal"><img src={paypalLogo} alt="paypal" /></Button>
                                <p>Paga con paypal</p>
                            </div>
                        </div>
                    </div>
                    <div className="confirm-data">
                        <h3 className="title">Confirma tus datos</h3>
                        <div className="data">
                            <div className="data-info">
                            <p>Nombre completo</p>
                            <p>Telefono</p>
                            <p>correo@gmail.com</p>

                            </div>
                            <div className="editar">
                            <a href="#">Editar</a>

                            </div>

                        </div>
                        
                    </div>
                    <div className="confirm-direction">
                        <h3 className="title">Confirma tus direccion</h3>
                        <div className="direction">
                            <div className="direction-info">
                                <p>Av Azucenas 14, 22225, Valle de las Flores, 
                                    Tijuana, Baja California, México.</p>
                                </div>
                                <div className="editar">
                                <a href="#">Editar</a>

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
                                <p>Precio</p>
                            </div>
                            <div className="concepto">
                                <p>Mesa</p>
                                <p>Precio</p>
                            </div>
                            <div className="concepto">
                                <p>Silla</p>
                                <p>Precio</p>
                            </div>
                            <div className="concepto">
                                <p>Sonido</p>
                                <p>Precio</p>
                            </div>
                            

                        </div>


                    </div>
                    <div className="conceptoTotal">
                        <h5>Sonido</h5>
                        <h4>Precio</h4>
                    </div>
                    <div className="confirm-button">
                        <Button>Confirmar solicitud</Button>

                    </div>


                </div>
            </div>
        </>
    )
}

export default Pago