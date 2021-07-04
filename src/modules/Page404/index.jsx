import React from 'react';
import './style.scss';
// Components

import img404 from '../../assets/page404.png';

const Page404 = () =>{
    return(
        <>
            
            <div className="body404">

                <div className="message404">
                    <h1>Parece que se acabó la fiesta por aquí :(</h1>
                    <p>Intenta con estos resultados:</p>
                    <h4><a href="#">Salones en CDMX,</a> <a href="#">Banquetes veganos,</a> <a href="#">Descuentos en cervezas artesanales</a></h4>
                </div>
                
                <img src={img404} className="image404"  alt="imagen404" />
            </div>
        
        </>
    );
}

export default Page404;