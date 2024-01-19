import {LOGO_URL} from "../utils/constants";
import {useState, useEffect, useContext} from "react";
import {Link} from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
import Usercontext from "../utils/Usercontext";
import {useSelector} from "react-redux";
import {CARTLOGO_URL} from "../utils/constants";





const Header=() =>{
    const cartItems = useSelector((store)=>store.cart.items);
    console.log(cartItems);
    // const btnName="Login" - Normal JS Variable
    const [btnNameReact,setbtnNameReact]=useState("Login");
    console.log("Header rendered");

    const {loggedInuser}=useContext(Usercontext)
    

    useEffect(()=>{
        // console.log("useeffect called")
    },[btnNameReact]);
    
    const onlineStatus=useOnlinestatus();
    return (
        <div className="flex justify-around bg-indigo-100">
            <div>
                <img  className="w-18 h-16" src={LOGO_URL}/>      
            </div>
            <div className="flex items-center">
                <ul className="flex ">
                    <li className="px-2 mx-4 mt-2">Status:{onlineStatus ? <span className="text-green-900">online</span> : <span className="text-red-600">offline</span> } </li>
                    <li className="p-2 mx-4 hover:bg-indigo-500 rounded-lg"><Link to="/">Home</Link></li>
                    <li className="p-2 mx-4 hover:bg-indigo-500 rounded-lg"><Link to="/about">About</Link></li>
                    <li className="p-2 mx-4 hover:bg-indigo-500 rounded-lg"><Link to="/contact">Contact us</Link></li>
                    <li className="p-2 mx-4 hover:bg-indigo-500 rounded-lg"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-2 mx-4 mt-2 font-bold" ><Link to="/cart">
                    <img className="w-8 mx-1 inline rounded-md" src={CARTLOGO_URL}/>
                    ({cartItems.length} items)</Link></li>
                    <button className="p-2 mx-4 w-20 bg-indigo-300 rounded-lg hover:bg-indigo-500" onClick={
                        /**For toggle this conditonal rendering used */
                        () => {
                            btnNameReact==="Login"
                            ?setbtnNameReact("Logout")
                            : setbtnNameReact("Login");
                        }
                    }>{btnNameReact}</button>
                    <li>{loggedInuser}</li>
                </ul>
                
            </div>
        </div>
    )

}

export default Header;