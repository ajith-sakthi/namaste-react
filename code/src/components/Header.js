import {LOGO_URL} from "../utils/constants";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";


const Header=() =>{
    // const btnName="Login" - Normal JS Variable
    const [btnNameReact,setbtnNameReact]=useState("Login");
    console.log("Header rendered");

    useEffect(()=>{
        console.log("useeffect called")
    },[btnNameReact]);
    
    const onlineStatus=useOnlinestatus();
    return (
        <div className="header">
        <div className="logo">
            <img width="90px" src={LOGO_URL}/>      
        </div>
        <div className="nav-items">
            <ul>
                <li>Status:{onlineStatus ? <span className="online">online</span> : <span className="offline">offline</span> } </li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact us</Link></li>
                <li><Link to="/grocery">Grocery</Link></li>
                <li>Cart</li>
                <button className="btn" onClick={
                    /**For toggle this conditonal rendering used */
                    () => {
                        btnNameReact==="Login"
                        ?setbtnNameReact("Logout")
                        : setbtnNameReact("Login");
                    }
                }>{btnNameReact}</button>
            </ul>
        </div>
        </div>
    )

}

export default Header;