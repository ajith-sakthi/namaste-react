
import React from "react";
import ReactDOM from "react-dom/client";


const heading=React.createElement("h1",{id:"heading"},"vanakkam by React")

const jsxheading=(<h1 id="heading">Vanakkam by jsx </h1>)

const Title =() => (
    <h1 id="heading">
    Vanakkam React Title component
    </h1>)


//Functionnal component
const HeadingComponent = () =>( 
    <div id="container">
        <Title />
        <h1> 
        Functional Heading Component
        </h1> 
    </div>
    ) 


const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeadingComponent/>);



