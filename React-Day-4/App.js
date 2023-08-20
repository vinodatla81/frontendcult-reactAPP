import React from "react";
import ReactDOM from "react-dom";

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
 * Properties for components
 */

const HeaderComponent = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src="https://img.freepik.com/premium-vector/online-food-app-icon-food-shop-location-logo-also-online-resturent-location-template_608547-155.jpg?w=100" alt="log"></img>
            </div>
            <div className="navigation">
                <ul>
                    <li>Home</li>
                    <li>About US</li>
                    <li>Services</li>
                    <li>Top Offers</li>
                    <li>my card</li>
                </ul>
            </div>
        </div>
    )
};

const RestoComponent = (props) => {
    console.log(props);
    return (
        <div className="resto">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/3632e911860bd3a90f9558fc81372b73" alt=""/>
            <h2>{props.resName}</h2>
            <p>{props.resRating } </p>
            <h4>{props.resDeliverytime}</h4>
            <h4>{props.resMake}</h4>
        </div>
    )
};

const BodyComponent = () => {
    return (
        <div className="body">
            <div className="resto-container">
            <RestoComponent 
            resName = "varalakshmi" 
            resRating = "3.6" 
            resDeliverytime = "30min" 
            resMake = "Biriyani, Tandoori"
            />
            <RestoComponent
            resName = "KFC - food"
            resRating = "3.8"
            resDeliverytime = "40min" 
            resMake = "Fried pieces"
            />
            <RestoComponent
            resName = "manohara food"
            resRating = "5"
            resDeliverytime = "1min" 
            resMake = "All indian foods"
            />
            <RestoComponent
             resName = "varalakshmi 2"
             resRating = "4"
             resDeliverytime = "20min" 
             resMake = "Biriyani, Tandoori"
            />
            </div>            
        </div>
    )
};



const FooterComponent = () => {
    return (
        <div className="footer"><h2>FooterComponent</h2></div>
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


