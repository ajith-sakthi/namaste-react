import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Restaurantcategory from "./Restaurantcategory";
import {useState} from "react";

const Resmenu=()=>{
    const {resId} =useParams();
    // console.log(resId);
    
    const resitems=useRestaurantMenu(resId);
    const [showIndex,setshowIndex]=useState(null);

   if(resitems==null){
        return <Shimmer/>
    }
    
    const {name,cuisines,costForTwoMessage} = resitems?.cards[0]?.card?.card?.info;
    const{itemCards} = resitems?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    const categories = resitems?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>{
        return c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    })
   console.log(categories);
    

    return(
        <div className="text-center my-2 ">
            
            <h1 className="font-bold text-xl">{name}</h1>
            <p className="my-2">{cuisines.join(",")} -{"Rs." + costForTwoMessage}</p>
            {categories.map((c,index)=>{
                return <Restaurantcategory 
                key={index} data={c}
                showItems={index===showIndex ? true : false}
                setshowIndex={()=> setshowIndex(index)}
                />
               
            })}
           
            
        </div>
    )
}
export default Resmenu;

































// useEffect(()=>{
//     menu();
// },[]);

// const menu=async ()=>{
//     const data= await fetch(MENU_API+resId);
//     const json= await data.json();
//     setresitems(json.data);
// }
