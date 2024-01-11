import {LOGO_URL} from "../utils/constants";
import {useState} from "react";

const Header=() =>{
    // const btnName="Login" - Normal JS Variable
    const [btnNameReact,setbtnNameReact]=useState("Login");
    return (
        <div className="header">
        <div className="logo">
            <img width="90px" src={LOGO_URL}/>      
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
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