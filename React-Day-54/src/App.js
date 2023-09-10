import React from "react";
import ReactDOM from "react-dom";
import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body";
import FooterComponent from "./components/Footer"





    

const AppLayout = () => {
    return (
        <div className="container-fluid">
            <HeaderComponent></HeaderComponent>
            <BodyComponent></BodyComponent>
            <FooterComponent></FooterComponent>
        </div>
    )
};


const root = ReactDOM.createRoot(document.getElementById("root")); // it is not use mostly in realtime

root.render(<AppLayout></AppLayout>); // React js element - HTML Element


