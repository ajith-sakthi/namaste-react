import {CARD_URL} from "../utils/constants.js";
const Itemlist=({items})=>{
    
    console.log(items);
    return (
        <div>
            {items.map((c)=>{
                return (
                    <div key={c.card.info.id} className="mx-2 mb-2 text-left border-2 border-b-indigo-200 flex justify-between">
                        <div className="py-2">
                            {c.card.info.name} - ₹ {c.card.info.price ?c.card.info.price/100: c.card.info.defaultPrice/100 }
                            <p className="text-xs py-2">{c.card.info.description}</p>
                        </div>
                        
                        <div>
                            <div className="absolute">
                                <button type="button" className="bg-black text-white p-1 rounded-md">Add +</button>
                            </div>
                                <img src={CARD_URL+c.card.info.imageId} className="w-[150px] "/>
                            </div>
                        </div>
                   
                )
            })}
        </div>
    )
}

export default Itemlist;