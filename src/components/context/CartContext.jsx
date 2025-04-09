import { createContext, useState } from "react";



export const CartContext = createContext()
export const CartProvider = ({children})=>{

    const [cart,setCart] = useState([]);
    let alertShown = false;

    const addToCart = (item)=>{
      
        setCart((prev)=>{
            console.log("hello alert")
            if(prev.some(cartItem=>cartItem.id===item.id)){
                if(!alertShown) {
                    alertShown = true
                    alert("item already selected")
                }
                
            }
            return [...prev,item]
        })

    }

    return(
        <CartContext.Provider value={{addToCart,cart}}>
            {children}
        </CartContext.Provider>
    )

}

