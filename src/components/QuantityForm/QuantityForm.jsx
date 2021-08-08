import React, { useEffect } from "react";
import plusIcon from "../../assets/icon-plus.svg";
import lessIcon from "../../assets/icon-less.svg";
import "./style.scss";

const QuantityForm = (props) => {
  function handleChange(event) {
    if (parseFloat(event.target.value) > props.minQuantity) {
      props.setQuantity(event.target.value);
    } else {
      alert("Ups, this is the lowest amount you can type");
    }
  }

  function lessQuantity() {
    if (props.quantity > props.minQuantity) {
      props.setQuantity(parseFloat(props.quantity) - 1);
    } else {
      alert("Ups, this is the lowest amount you can type");
    }
  }
  //Set min amount if existing
  useEffect(() => {
    if (props.minQuantity) {
      props.setQuantity(props.minQuantity);
    }
  }, [props]);

  return (
    <>
      <h3>
        <strong>{props.title}</strong>
      </h3>
      <div className="quantity">
        <button onClick={lessQuantity}>
          <img src={lessIcon} alt="add-person" />
        </button>
        <input type="number" value={props.quantity} onChange={handleChange} />
        <button
          onClick={() => {
            props.setQuantity(parseFloat(props.quantity) + 1);
          }}
        >
          <img src={plusIcon} alt="add-person" />
        </button>
      </div>
    </>
  );
};

export default QuantityForm;
