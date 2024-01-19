import {useSelector,useDispatch} from "react-redux";
import Itemlist from "./Itemlist";
import {clearCart} from "../utils/cartSlice";
const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items);
    const dispatch = useDispatch()
    const handlerClearItems=()=>{
        dispatch(clearCart())
    }
    return(
        <div className="text-center">
            <h1 className="text-lg font-bold">Cart</h1>
            <button className="bg-indigo-300 p-2 m-2 hover:bg-indigo-500 rounded-lg" onClick={handlerClearItems}>Clear cart</button>
            <div className="w-6/12 m-auto">
            {cartItems.length === 0 && "Your card is empty, add to cart"}
            <Itemlist items={cartItems}/>
            </div>
        </div>
    )
}

export default Cart;