import {CARD_URL} from "../utils/constants"

const Rescards=(props)=>{
    
    const {resData} =props

    const{cloudinaryImageId,name,cuisines,avgRating,costForTwo}=resData?.info
    
    return (
            
            <div className="res-card" style={{backgroundColor:"rgb(228, 225, 222)"}}>
                <img alt ="logo" 
                src={ CARD_URL+ cloudinaryImageId}/>
                <h3>{name}</h3>
                <h5>{cuisines.join(", ")}</h5>
                <p>{avgRating + " Stars"}</p>
                <p>{costForTwo}</p>
                <p>36 minutes</p> 
            </div>
    )
}

export default Rescards;