import RestoComponent from "./Resto";
import restorentData from "../utils/mockData";
import { useState, useEffect } from "react";

const BodyComponent = () => {

    let [restorentData, filteredRestaurants] = useState(
        [
         {
            id: "25a6893",
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
         id: "256b85431",
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
         id: "2568c5432",
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
         id: "256454d53",
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
         id: "256453474",
         name: "Guntur special",
         cloudinaryImageId: "6126c9b45de2cb222405c1af8a321e74",
         locality: "Vijayawada",
         areaName: "Forest Dept Colony",
         costForTwo: "₹220 for two",
         cuisines: ["Burgers", "Beverages", "Cafe"],
         avgRating: 1.1,
         veg: true,
     }   
    ]
    );

    useEffect( () => {
       fetchData();
    }, []);

    const fetchData = async() => {
        // Java script fetch method
        const resdata = await  fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.430466&lng=78.441776&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const originalData = await resdata.json();
        const apiRestolist = originalData.data.cards[2].card.card.gridElements.infoWithStyle.restaurents
        // filteredRestorents(apiRestolist);
    }

    return (
        <div className="body">
            <div className="top-rated">
                <button
                 className="top-resto"
                 onClick={ () => {
                   let filteredResto = restorentData.filter( (resto) => resto.avgRating > 4);
                     // console.log(filteredResto);
                     filteredRestaurants(filteredResto)
                    // restorentData = filteredResto;
                 }} 
                 > Top Rated Resto
                 </button>
            </div>
            <div className="resto-container">
            {
                restorentData.map( (restorent) => ( 
                <RestoComponent restoData = {restorent} />
                ))
           
            }
            </div>            
        </div>
    )
}

export default BodyComponent;