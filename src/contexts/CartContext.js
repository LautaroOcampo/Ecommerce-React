import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    let [productCartList, setProductCartList] = useState([])

    const addProduct = (product) => {
        if(!productCartList.some(ele => ele.id === product.id)){
            let newList = [...productCartList,product]
            setProductCartList(newList)
        }
    }

    const removeProduct = (product) => {
        let copyList = [...productCartList]
        let newList = copyList.filter(ele => ele.id !== product.id)
        setProductCartList(newList)
    }

    return(
        <CartContext.Provider value={{productCartList, addProduct, removeProduct}}>
            {children}
        </CartContext.Provider>
    )
}