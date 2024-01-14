import {useState, useEffect} from "react";
import {MENU_API} from "../utils/constants";
const useRestaurantMenu = (resId)=>{
    const[resItems,setresItems]=useState(null);

    useEffect(()=>{
        menu();
    },[]);

    const menu = async ()=>{
        const fetchdata=await fetch(MENU_API+resId);
        const json=await fetchdata.json()
        setresItems(json.data);
    }
    return resItems;
}

export default useRestaurantMenu;