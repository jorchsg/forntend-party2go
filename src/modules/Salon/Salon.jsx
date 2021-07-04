import React from 'react';
import QuantityForm from '../../components/QuantityForm/QuantityForm';
import Button from '../../components/Button/Button';
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
                <Button minWidth='100%' type='solid'>Buscar disponibilidad</Button>
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