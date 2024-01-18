import {useState} from "react";
import Itemlist from "./Itemlist";


const Restaurantcategory=({data,showItems,setshowIndex})=>{
    // console.log(data);
    // const[showItems,setshowItems]= useState(false);

    const accordian=()=>{
    //     console.log("clicked")
    //     setshowItems(!showItems);
        setshowIndex();
    }
    
    return(
        <div className="w-1/2 m-auto my-2 border-black bg-indigo-100 shadow-lg ">
            <div className="flex justify-between cursor-pointer" onClick={accordian}>
                <span className="p-2 font-bold">
                    {data.card.card.title}({data.card.card.itemCards.length})</span>
                <span className="p-2">!click</span>
            </div>
            <div>
                {showItems && <Itemlist items={data.card.card.itemCards}/>}
            </div>
        </div>
    )
}

export default Restaurantcategory;