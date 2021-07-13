import React from 'react';
import './style.scss';

const OrderContentLayout =({selection,results})=>{
    return (
        <div className='order-content'>
            <div className='order-content-selector'>
               {selection}
            </div>
            <div className='order-content-results'>
                {results}
            </div>
        </div>
    )
}
export default OrderContentLayout;