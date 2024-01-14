import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const Resmenu=()=>{
    const {resId} =useParams();
    console.log(resId);
    
    const resitems=useRestaurantMenu(resId);

   if(resitems==null){
        return <Shimmer/>
    }
    
    const {name,cuisines,costForTwoMessage} = resitems?.cards[0]?.card?.card?.info;
    const{itemCards} = resitems?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return(
        <div>
            <h1>{name}</h1>
            <p>{cuisines.join(",")} -{"Rs." + costForTwoMessage}</p>
            <h3>Menu</h3>
            <ul>
                {itemCards?.map((menulist)=>{
                    return <li key={menulist?.info?.id}>{menulist?.card?.info?.name}-{" Rs."}-{menulist?.card?.info?.defaultPrice/100 || menulist?.card?.info?.price/100}</li>
                })}
                {/* <li>{itemCards[0]?.card?.info?.name}</li>
                <li>{itemCards[1]?.card?.info?.name}</li>
                 */}
            </ul>
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
