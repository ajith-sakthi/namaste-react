import resList from "../utils/mockdata";
import Rescards from "./Rescards";
import { useState }  from "react";

const Body=()=>{
  //React state variable
  let [listOfRestaurant,setlistOfRestaurant]=useState(resList);
  //Normal JS variable
    let listOfRestaurantOne=[
        { "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
      "id": "644303",
      "name": "A2B Veg",
      "cloudinaryImageId": "262ca7b195a5e7084e175600667f53a5",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "South Indian",
        "North Indian",
        "Sweets",
        "Chinese"
      ],
      "avgRating": 4.3 
    } 
},{"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
  "id": "18341",
  "name": "Doveton Cafe",
  "cloudinaryImageId": "u5e6ne1v8eu61wykyzw5",
   "costForTwo": "₹250 for two",
  "cuisines": [
    "North Indian",
    "Chinese",
    "South Indian",
    "Indian",
    "Tandoor"
  ],
  "avgRating": 4.4 
}
}
    ]
    return(
        <div className="body-container">
            <div className="filter">
                <button className="filter-btn"
                onClick={()=>
                  {
                  filterValue=listOfRestaurant.filter((res)=>{
                      return res.info.avgRating > 4.3
                  })
                  setlistOfRestaurant(filterValue)
                  console.log(filterValue)
                }
              }
                >Top ranked restaurant</button>
            </div>
            <div className="res-container">
              {
                listOfRestaurant.map((restaurant)=>{
                    return <Rescards key={restaurant.info.id} resData={restaurant}/>
                })
                
              }
             </div>
        </div>
        )
}

export default Body;
