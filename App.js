import React from "react";
import ReactDOM from "react-dom";

const h1tag = React.createElement("div", { id : 'parent'}, 
React.createElement("div",{ id : "child"}),
React.createElement("h1",{ id : "some"}, "Hello All 22 ccc, I am from Reactjs and NestedH1"));

console.log(h1tag);

const root = ReactDOM.createRoot(document.getElementById('root')); // it is not use mostly in realtime

root.render(h1tag);