import React from "react";
import ReactDOM from "react-dom";
import HeaderComponent from "./components/Header";
import FooterComponent from "./components/Footer";

/**
 * Hearder component
 * -logo
 * -Menu item
 * Body component
 *  -search Bar
 *  -RestoComponent
 *     -Image
 *     -Resto Name
 *     -Rating
 *     -Delivery Time
 * Footer Component
 *   - Copyrights
 *   - Links
 * ..........Folder structuring........
 * Properties for components
 * Will Create SRC folder and move the APP.js in to it.
 * Will create component and will put all components in folder
 * will create separate component file and link in APP.js
 */



const restorentData =  [
{
       id: "256893",
       name: "McDonald's",
       cloudinaryImageId: "ee5f8e06b300efc07c9fe3f4df40dfc4",
       locality: "Hyderabad Kondapur LG",
       areaName: "Forest Dept Colony",
       costForTwo: "₹400 for two",
       cuisines: ["Burgers", "Beverages", "Cafe"],
       avgRating: 4.1,
       veg: true,
},
{
    id: "2568543",
    name: "Udipi's Ahar",
    cloudinaryImageId: "qqegmnp7k3hl2kt9tdzl",
    locality: "Gachiowli",
    areaName: "Forest Dept Colony",
    costForTwo: "₹300 for two",
    cuisines: ["Burgers", "Beverages", "Cafe"],
    avgRating: 3.1,
    veg: true,
},
{
    id: "2568543",
    name: "Delhis Ahar",
    cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
    locality: "Panjagutta",
    areaName: "Forest Dept Colony",
    costForTwo: "₹3500 for two",
    cuisines: ["Burgers", "Beverages", "Cafe"],
    avgRating: 4.6,
    veg: true,
},
{
    id: "2564545",
    name: "Nellore special",
    cloudinaryImageId: "6126c9b45de2cb222405c1af8a321e74",
    locality: "Nellore",
    areaName: "Forest Dept Colony",
    costForTwo: "₹200 for two",
    cuisines: ["Burgers", "Beverages", "Cafe"],
    avgRating: 2.1,
    veg: true,
},
{
    id: "25645347",
    name: "Guntur special",
    cloudinaryImageId: "6126c9b45de2cb222405c1af8a321e74",
    locality: "Vijayawada",
    areaName: "Forest Dept Colony",
    costForTwo: "₹220 for two",
    cuisines: ["Burgers", "Beverages", "Cafe"],
    avgRating: 1.1,
    veg: true,
}

 ];
    


const RestoComponent = (props) => {
     console.log(props);
     const {restoData} = props;
     console.log(restoData);
    return (
        <div className="resto">
            <img src= { "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + restoData.cloudinaryImageId }/>
            <h2>{restoData.name}</h2>
            <h4>{restoData.avgRating}</h4>
            <h4>{restoData.locality}</h4>
            <h4>{restoData.costForTwo}</h4>
            <h4>{restoData.cuisines.join(", ")}</h4>
        </div>
    )
};

const BodyComponent = () => {
    return (
        <div className="body">
            <div className="resto-container">
            {
                restorentData.map( (restorent) => ( <RestoComponent restoData = {restorent}/>) )
            /* <RestoComponent  restoData = {restorentData[0]}/>            
            <RestoComponent  restoData = {restorentData[1]}/>            
            <RestoComponent  restoData = {restorentData[2]}/>      */
            
            }
            </div>            
        </div>
    )
};





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


