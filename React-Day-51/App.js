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

const restorentData =  {
       id: "256893",
       name: "McDonald's",
       cloudinaryImageId: "ee5f8e06b300efc07c9fe3f4df40dfc4",
       locality: "Hyderabad Kondapur LG",
       areaName: "Forest Dept Colony",
       costForTwo: "₹400 for two",
       cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
       avgRating: 4.1,
       feeDetails: {
          restaurantId: "256893",
          fees: [{
             name: "BASE_DISTANCE",
             fee: 5600
          }, {
             name: "BASE_TIME"
          }, {
             name: "ANCILLARY_SURGE_FEE"
          }],
          totalFee: 5600
       },
       parentId: "630",
       avgRatingString: "4.1",
       totalRatingsString: "10K+",
       sla: {
          deliveryTime: 31,
          lastMileTravel: 6.1,
          serviceability: "SERVICEABLE",
          slaString: "31 mins",
          lastMileTravelString: "6.1 km",
          iconType: "ICON_TYPE_EMPTY"
       },
       availability: {
          nextCloseTime: "2023-08-23 22:45:00",
          opened: true
       },
       badges: {},
       isOpen: true,
       type: "F",
       "badgesV2": {
          entityBadges: {
             imageBased: {},
             textBased: {},
             textExtendedBadges: {}
          }
       },
       "aggregatedDiscountInfoV3": {
          header: "20% OFF",
          subHeader: "UPTO ₹50",
          discountCalloutInfo: {
             message: "Free Delivery",
             logoCtx: {
                logo: "v1655895371/free_delivery_logo_hqipbo.png"
             }
          }
       },
       orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {}
       },
       differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
             mediaType: "ADS_MEDIA_ENUM_IMAGE",
             lottie: {},
             video: {}
          }
       },
       reviewsSummary: {},
       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       restaurantOfferPresentationInfo: {}
    };
    


const RestoComponent = (props) => {
    console.log(props);
     const {restoData} = props
    return (
        <div className="resto">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/3632e911860bd3a90f9558fc81372b73" alt=""/>
        </div>
    )
};

const BodyComponent = () => {
    return (
        <div className="body">
            <div className="resto-container">
            <RestoComponent 
            restoData = {restorentData}

            />
            {/* <RestoComponent
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
            /> */}
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


