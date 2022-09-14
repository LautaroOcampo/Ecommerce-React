import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    let [productCartList, setProductCartList] = useState([])
    let [cartQuantity, setCartQuantity] = useState(0)

    const addProduct = (product) => {
        if(!productCartList.some(ele => ele.id === product.id)){
            let newList = [...productCartList,product]
            setProductCartList(newList)
            setCartQuantity(cartQuantity + product.quantity)
        }else{
            let cartItem = productCartList.find(ele => ele.id === product.id)
            cartItem.quantity += product.quantity
            let newList = [...productCartList]
            setProductCartList(newList)
            setCartQuantity(cartQuantity + product.quantity)
        }
    }

    const removeProduct = (product) => {
        if(productCartList.length != 1){
            let copyList = [...productCartList]
            let newList = copyList.filter(ele => ele.id !== product.id)
            setProductCartList(newList)
            setCartQuantity(cartQuantity - product.quantity)
        }else{
            let newList = productCartList.filter(ele => ele.id !== product.id)
            setProductCartList(newList)
            setCartQuantity(cartQuantity - product.quantity)
        }
    }

    return(
        <CartContext.Provider value={{productCartList, addProduct, removeProduct, cartQuantity}}>
            {children}
        </CartContext.Provider>
    )
}