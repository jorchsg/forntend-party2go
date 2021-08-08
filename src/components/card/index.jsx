import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";

import "./style.scss";

// Props:
// image -> string
// nameService -> string
//price->string
//isSelected -> boolean
//onClick -> funtion
//description->string
//children-> React child
const CardComponent = (props) => {
  return (
    <>
      <Card
        className={props.isSelected ? "card active" : "card"}
        onClick={props.onClick}
      >
        <CardActionArea>
          <img className="imgService" src={props.image} alt="Img service" />
          <CardContent>
            <div className="nameAndPrice">
              <h5 className="name">
                {props.nameService == null || "" ? (
                  <h5>Undefined</h5>
                ) : (
                  props.nameService
                )}
              </h5>
              <h4 className="price">
                {props.price === null || props.price === ""
                  ? "Undefined"
                  : "$" + props.price}
              </h4>
            </div>
            <div className="descripcion-content">
              <p className="descripcion">
                {props.description === null || "" ? (
                  <p>Undefined</p>
                ) : (
                  props.description
                )}
              </p>
            </div>
            {props.children}
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};
export default CardComponent;
