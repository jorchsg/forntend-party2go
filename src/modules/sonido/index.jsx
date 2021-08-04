import React from 'react';
import Card from '../../components/card/index';
import img from "../../assets/sonido.png";

import "./style.scss";
import axios from 'axios';
import config from '../../config';
import { AppContext } from '../../components/Provider';








const Sonido = () =>{
    const [packSelected,setPackSelected] = React.useState(undefined);
    console.log(packSelected);
    
    const [sonidos,setSonidos]=React.useContext(AppContext);
    console.log(sonidos)

    
    return(
    
        <>  
            <div className="sonido-container">

                <div className="list-container">
                    <div className="sonido-grid">

                        
                            
                        {
                            !sonidos ? <div>No hay sonidos disponibles</div>:
                            sonidos.map((info)=>{
                                return(
                                    <Card
                                        isSelected = {packSelected === info.idSonido}
                                        image={img} 
                                        nameService={info.nombre}
                                        price={info.precioHora}
                                        description={info.descripcion}
                                        key={info.idSonido}
                                        onClick={
                                            ()=>{
                                                setPackSelected(info.idSonido)
                                            }}/>
                                )
                            })
                        }
                        
                    </div>
                        
                </div>
            </div>
        </>
    );
}
export default Sonido;