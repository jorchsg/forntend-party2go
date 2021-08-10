import React from "react";
import plusIcon from "../../assets/icon-plus.svg";
import lessIcon from "../../assets/icon-less.svg";
import "./style.scss";
import { AppContext } from "../Provider";
import { StepContext } from "../../components/ProviderStep";
const QuantityForm = (props) => {
  

  // function lessQuantity() {
  //   if (props.quantity > props.minQuantity) {
  //     props.setQuantity(parseFloat(props.quantity) - 1);
  //   } else {
  //     alert("Ups, this is the lowest amount you can type");
  //   }
  // }
  // //Set min amount if existing
  // useEffect(() => {
  //   if (props.minQuantity) {
  //     props.setQuantity(props.minQuantity);
  //   }
  //   // eslint-disable-next-line
  // }, [props.quantity]);
  const [context,setContext]= React.useContext(AppContext)
  const [stepContext]=React.useContext(StepContext)
 



  function localValue () {
    switch (stepContext) {
      case 0:
          return context.peopleQuantity
      
      case 1:
        return context.mesasQuantity
      
      case 2:
        return context.sillasQuantity
     
    
      default:
        break;
    }
  }
  function aumentQuantity () {
     switch (stepContext) {
       case 0:
        setContext({
          ...context,
          peopleQuantity: context.peopleQuantity+1
        })
         break;
        case 1:
        setContext({
          ...context,
          mesasQuantity: context.mesasQuantity+1
        })
          break;
        case 2:
          setContext({
            ...context,
            sillasQuantity: context.sillasQuantity+1
          })
            break;
       default:
         break;
     }
     

  }
  function handleChange(event) {
    switch (stepContext) {
      case 0:
          
            setContext({
              ...context,
              peopleQuantity: parseFloat(event.target.value)
            });
            console.log("People "+context.peopleQuantity)
         
        break;
      case 1:
        
          setContext({
            ...context,
            mesasQuantity: parseFloat(event.target.value)
          });
          
        
      break;
      case 2:
        
          setContext({
            ...context,
            sillasQuantity: parseFloat(event.target.value)
          });
         
        
      break;
    
      default:
        break;
    }
    
  }
  function lessQuantity () {
    switch (stepContext) {
      case 0:
       
          setContext({
            ...context,
            peopleQuantity: context.peopleQuantity-1
          })
          
       
        break;
      case 1:
        
          setContext({
            ...context,
            mesasQuantity: context.mesasQuantity-1
          })
         
        
        break;
          case 2:
       
          setContext({
            ...context,
            sillasQuantity: context.sillasQuantity-1
          })
          
       
        break;
      default:
        break;
    }
    

 }
  return (
    <>
      <h3>
        <strong>{props.title}</strong>
      </h3>
      <div className="quantity">
        <button onClick={lessQuantity}>
          <img src={lessIcon} alt="add-person" />
        </button>
        <input type="number" value={localValue()} onChange={handleChange} onEndedCapture={(e)=>{console.log(e)}} />
        <button
          onClick={aumentQuantity}
        >
          <img src={plusIcon} alt="add-person" />
        </button>
      </div>
    </>
  );
};

export default QuantityForm;
