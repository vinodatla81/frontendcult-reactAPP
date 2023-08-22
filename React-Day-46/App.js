import React from "react";
import ReactDOM from "react-dom";
 
// React Create Element
const h1tag = React.createElement("div", { id : "parent"}, "some text");


// JSX - 5%
// Babel - 
let name = "Vinod";
let mobile = "8331834181"
const jsXdivision = <div id="myid" className="my-div"><p>my name is  { name } and mobile numer is {mobile}</p>
<p id="name">rregrjhhhji</p> JSX
</div>;

// React Components

// Everything in react components are 2 ways:
// 1) class based components (old way)
// 2) Functional/methods based components (99.9 % we use this)
// ............Components.............

const userDetails = {
    username : "vinod",
    mobile : 8331834181
}
const ButtonCOM = () => (
    <input type="text"/>
);
const HeaderComponent = () => (
    <div class ="header"><h2>my Header</h2><ButtonCOM/></div>
);

const ContentComponent = () =>  { 
    return(<div class ="content">
    <h2>The user name: {userDetails.username}</h2>
    </div>)    
};

const FooterComponent = () => {
    return(<div class ="footer"><h2>my content</h2></div>)    
};

const HomepageComponent = () => (
    <div className ="container">
        <HeaderComponent></HeaderComponent> 
        <ContentComponent></ContentComponent>
        <FooterComponent></FooterComponent>
    </div>
);


console.log(h1tag);

const root = ReactDOM.createRoot(document.getElementById("root")); // it is not use mostly in realtime

root.render(<HomepageComponent/>); // React js element - HTML Element
