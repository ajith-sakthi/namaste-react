import Rescards from "./Rescards";
import { useState, useEffect }  from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import {RESCARDSMAIN_API} from "../utils/constants";

const Body=()=>{
  //React state variable - for filtered the card
  let [listOfRestaurant,setlistOfRestaurant]=useState([]);
   //React state variable - for rendering the card(copy of listOfRestaurant)
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
      const data=await fetch(RESCARDSMAIN_API);
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
                    return (
                    <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id} className="no-line"><Rescards  resData={restaurant}/></Link>)
                })
              }
             </div>
        </div>
        )
}

export default Body;
