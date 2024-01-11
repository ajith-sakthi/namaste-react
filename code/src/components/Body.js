import resList from "../utils/mockdata";
import Rescards from "./Rescards";
import { useState, useEffect }  from "react";
import Shimmer from "./Shimmer";

const Body=()=>{
  //React state variable - for rendering the card
  let [listOfRestaurant,setlistOfRestaurant]=useState([]);
  const[filteredRestaurant,setfilteredRestaurant]=useState([]);
  //React state variable- for search rendering
  const[searchValue,setsearchValue]=useState("");
  /** to know each time state variable updates the whole
  component re-render again(reconciliation algorithm)*/ 
  console.log("body rendered")

  useEffect(()=>{
        fetchData();
    },[]);
   fetchData= async ()=>{
      const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0035068&lng=77.5890953&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json=await data.json()
      console.log(json)
      setlistOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setfilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    // conditonal rendering
   return listOfRestaurant.length===0 ? <Shimmer/> :(
        <div className="body-container">
            <div className="filter">
             
              <div className="search-box">
                <input type="text" value={searchValue} onChange={(sVal)=>{
                      setsearchValue(sVal.target.value);
                }}></input>
                <button className="search-btn" onClick={
                  ()=>{
                    const filteredValue=listOfRestaurant.filter((res)=>{
                      return res.info.name.toLowerCase().includes(searchValue.toLowerCase());
                    })
                    setfilteredRestaurant(filteredValue)
                  }
                }>Search</button>
              </div>
              
              <div className="rank-btn">
                    <button className="filter-btn"
                    onClick={()=>
                      {
                      filterValue=listOfRestaurant.filter((res)=>{
                          return res.info.avgRating > 4.3
                      })
                      setfilteredRestaurant(filterValue)
                      // console.log(filterValue)
                    }
                  }
                  >Top ranked restaurant</button>
              </div>
            </div>
            <div className="res-container">
              {
                filteredRestaurant.map((restaurant)=>{
                    return <Rescards key={restaurant.info.id} resData={restaurant}/>
                })
                
              }
             </div>
        </div>
        )
}

export default Body;
