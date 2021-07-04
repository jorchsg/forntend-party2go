import React from 'react';
import QuantityForm from '../../components/QuantityForm/QuantityForm';
import iconNoResults from '../../assets/icon-no-results.png';
import './Salon.scss';

const Salon =()=>{
    const [people,setPeople] = React.useState(0);

    return (
        <div className='salones'>
            <div className='salones-selector'>
                <h3><strong>Elige la fecha y hora</strong></h3>
                <div> date picker  </div>
                <div> hour picker </div>
                <QuantityForm 
                    title='Cantidad de personas'
                    minQuantity={1}
                    setQuantity={setPeople} 
                    quantity={people}
                />
                <button>Buscar disponibilidad</button>
            </div>
            <div className='salones-results'>
                <div className='no-results'>
                    <img src={iconNoResults} alt="No Results" />
                    <h3><strong>No hay resultados</strong></h3>
                </div>
            </div>
        </div>
    )
}
export default Salon;