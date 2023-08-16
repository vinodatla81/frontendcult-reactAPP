/**
 * <div id="parent">
 * <div id="child">
 *     <h1>Helloh1</h1>
 * <div>
 * </div>
 */

const h1tag = React.createElement("div", { id : 'parent'}, 
React.createElement("div",{ id : "child"}),
React.createElement("h1",{ id : "some"}, "Hello All, I am from Reactjs and NestedH1"));

console.log(h1tag);

const root = ReactDOM.createRoot(document.getElementById('root')); // it is not use mostly in realtime

root.render(h1tag);