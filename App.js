
const root = ReactDOM.createRoot(document.getElementById("root"));
const parent = React.createElement(
    "div", 
    {id: "parent"}, 
    [React.createElement(
        "div", 
        {id: "children"}, 
        [React.createElement("h1", {},"Nested tags"),React.createElement("h1", {},"Nested tags")]
    ),
    React.createElement(
        "div", 
        {id: "children"}, 
        [React.createElement("h1", {},"Nested tags"),React.createElement("h1", {},"Nested tags")]
    )]
);
// const heading = React.createElement("h1", {}, "Hello world from react");
root.render(parent);