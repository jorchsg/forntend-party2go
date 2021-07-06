import React from 'react';
import Card from '../../components/card/index'
import img from "../../assets/sonido.png";
import "./style.scss"

const datos=[
    {
        imgDJ:img,
        sonido:"Avicci",
        precio:3000,
        descripcion:"Este sonido cuenta con grandes beneficion como lo son luces, y un amplia gama de discos"
    },
    {
        imgDJ:img,
        sonido:"David Guetta",
        precio:200,
        descripcion:"Este sonido cuenta con grandes beneficion como lo son luces, y un amplia gama de discos"
    },
    {
        imgDJ:img,
        sonido:"Steveaoki",
        precio:100,
        descripcion:"Este sonido cuenta con grandes beneficion como lo son luces, y un amplia gama de discos"
    },
    {
        imgDJ:img,
        sonido:"MO",
        precio:3500,
        descripcion:"Este sonido cuenta con grandes beneficion como lo son luces, y un amplia gama de discos"
    }      
]
const Sonido = () =>{
    const [packSelected,setPackSelected] = React.useState(undefined)
    console.log(packSelected)
    
    return(
    
        <>  
            <div className="sonido-container">

                <div className="list-container">
                    <div className="sonido-grid">

                        {datos.map((info,i)=>{
                            return(

                                <Card
                                    isSelected = {packSelected === i}
                                    image={info.imgDJ} 
                                    nameService={info.sonido}
                                    price={info.precio}
                                    description={info.descripcion}
                                    key={i}
                                    onClick={
                                        ()=>{
                                            setPackSelected(i)
                                        }
                                    }>
                                </Card>
                            )
                        })
                        
                        }
                    </div>
                        
                </div>

                <div className="buttons-container">
                    <button className="button-omitir">Omitir</button>
                    <button className={(packSelected==undefined?"button-continue":"button-continue selected")}>Continue</button>
                </div>
            </div>
        </>
    );
}
export default Sonido;