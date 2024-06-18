import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AdviceApp from "./formSample/AdviceApp";
// import QrCode from "./QrCode";
// import Cart from "./formSample/Cart";
// import UserDetails from "./formSample/UserDetails";
// import Regform from "./formSample/Regform";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <QrCode /> */}
    {/* <Cart /> */}
    {/* <UserDetails /> */}
    {/* <Regform /> */}
    <AdviceApp />
  </React.StrictMode>,
);
