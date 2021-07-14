import React from 'react';
import './style.scss';


/*
                PROPS
    onClick = function execute when click 
    type = solid | outline | blank
    disable = wheather or not the button is disable
    text = the content of the button
    children = the content of the button
    minWidth = string of minimun width
    style = obj with inline styles

*/
const Button = (props)=>{
    return (
        <button 
            style={{
                minWidth:props.minWidth,
                ...props.style
            }}
            onClick={props.onClick} 
            className={`${props.className} button-component button-component--${props.type}`}
            id={props.id} 
            disable={props.disable}>
            {props.text || props.children}
        </button>
    )
}

export default Button ;