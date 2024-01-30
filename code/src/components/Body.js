import Rescards,{withPromotedcard} from "./Rescards";
import { useState, useEffect, useContext }  from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import {RESCARDSMAIN_API} from "../utils/constants";
import useOnlinestatus from "../utils/useOnlinestatus";
import Usercontext from "../utils/Usercontext";

const Body=()=>{
  //React state variable - for filtered the card
  let [listOfRestaurant,setlistOfRestaurant]=useState([]);
   //React state variable - for rendering the card(copy of listOfRestaurant)
  const[filteredRestaurant,setfilteredRestaurant]=useState([]);
  // console.log(filteredRestaurant);
  //React state variable- for search rendering
  const[searchValue,setsearchValue]=useState("");
  /** to know each time state variable updates the whole
  component re-render again(reconciliation algorithm)*/ 
  // console.log("body rendered",listOfRestaurant);
  
  const onlineStatus=useOnlinestatus();
  const PromotedCard=withPromotedcard(Rescards);

  const {setName,loggedInuser}=useContext(Usercontext);

  useEffect(()=>{
        fetchData();
    },[]);
   fetchData= async ()=>{
      const data=await fetch(RESCARDSMAIN_API);
      const json=await data.json()
      setlistOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setfilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    if(onlineStatus === false){
      return (
        <h1>Hey dev looks link you're offline check your wifi or internet connection!!</h1>
      )
    }

    // conditonal rendering
   return listOfRestaurant.length===0 ? <Shimmer/> : (
    <div className="">
            <div className="flex justify-center my-4">
                <div className="">
                  <input data-testid="searchId" className="border-2 w-60 border-black rounded-md" type="text" value={searchValue} onChange={(sVal)=>{
                        setsearchValue(sVal.target.value);
                  }}></input>
                  
                  <button className="ml-2 px-2 py-1  bg-indigo-300 rounded-lg hover:bg-indigo-400" onClick={
                    ()=>{
                      const filteredValue=listOfRestaurant?.filter((res)=>{
                        return res.info.name.toLowerCase().includes(searchValue.toLowerCase());
                      })
                      setfilteredRestaurant(filteredValue)
                    }
                  }>Search</button>
                </div>
              
                <div className="ml-4">
                      <button className="px-2 py-1 bg-indigo-300 rounded-lg hover:bg-indigo-400"
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
                
                <div className="ml-2"> 
                  <label>Name :</label>
                  <input type="text" className="ml-2 border border-black" 
                  value={loggedInuser} onChange={(e)=>setName(e.target.value)}/>
                </div>
            </div>

            
            <div className="mx-[157px] flex flex-wrap w-3/4">
              {
                filteredRestaurant.map((restaurant)=>{
                    return (
                    <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id} className="no-line">
                      {restaurant.info.promoted ? <PromotedCard resData={restaurant}/> :<Rescards  resData={restaurant}/>}
                      </Link>)
                })
              }
             </div>

        </div>
        )
}

export default Body;
