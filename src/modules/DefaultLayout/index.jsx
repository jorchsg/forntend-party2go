import React from "react";
import ResponsiveNavBar from "../../components/Navbar/ResponsiveNavBar";
import "./style.scss";

const DefaultLayout = (props) => {
  return (
    <div className="default-layout">
      <ResponsiveNavBar />
      <div className="content">{props.children}</div>
    </div>
  );
};
export default DefaultLayout;
