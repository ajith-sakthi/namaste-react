
import React, {lazy,Suspense, useEffect,useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Resmenu from "./components/Resmenu"
import {createBrowserRouter,RouterProvider, Outlet} from "react-router-dom";
// import Grocery from "./components/Grocery";
import Usercontext from "./utils/Usercontext";
import {Provider} from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";


const Grocery = lazy(()=>{
    return import("./components/Grocery")
});
const Applayout=() =>{

    const[Name,setName]=useState();

    useEffect(()=>{
        //some authentication
        const data={
            name:"sakthi"
        }
       setName(data.name);
    },[]);
    return (
     <Provider store={appStore}>
             <div className="app-container">
            <Usercontext.Provider value={{loggedInuser: Name,setName}}>
            <Header/>
            <Outlet/>
            </Usercontext.Provider>
            {/* Nested Provider */}
            {/* <Usercontext.Provider value={{loggedInuser:"ben tennison"}}>
            <Outlet/>
            </Usercontext.Provider>
             */}
        </div>
     </Provider>
       
       
    )
}


const root=ReactDOM.createRoot(document.getElementById("root"))

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<Applayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>
            },
            {
                path:"/restaurants/:resId",
                element:<Resmenu/>
            },
            {
                path:"/cart",
                element:<Cart/>
            }
        ],
        errorElement:<Error/>
    }
]);

root.render(<RouterProvider router={appRouter}/>);





