import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./style.scss";

const DefaultLayout = (props) => {
  return (
    <div className="default-layout">
      <Navbar />
      <div className="content">{props.children}</div>
    </div>
  );
};
export default DefaultLayout;
