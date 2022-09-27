import './Cart.css'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'

export const CartItem = (props) => {

    let {removeProduct} = useContext(CartContext)
    let {addProductCart} = useContext(CartContext)
    let {removeOneProduct} = useContext(CartContext)

    let [itemQuantity, setItemQuantity] = useState()
    let [totalItem, setTotalItem] = useState()

    useEffect(() => {
        const itemQuantityRefresh = () => {
            setItemQuantity(props.item.quantity)
            setTotalItem(props.item.precio * props.item.quantity)
        }
        itemQuantityRefresh()
    },[props.item.quantity])

    return(
        <>
        <div class="c-item-div">
            
            <img class="c-item-img" src={props.item.img}></img>
            <div class="c-props-div">
                <p class="c-item-p">{props.item.nombre}</p>
                <p class="c-item-p">{props.item.quantity} Unidades</p>
                <p class="c-item-p">{props.item.precio}$ Cada una</p>
                <p class="c-item-p"><b>Total: {props.item.precio * props.item.quantity}$</b></p>
                <div class="c-buttons-div">
                    <button class="c-button-add" onClick={() => addProductCart(props.item)}>+</button>
                    <button class="c-button-add" onClick={() => removeOneProduct(props.item)}>-</button>
                    <button class="c-button" onClick={() => removeProduct(props.item)}><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
        </div>
        </>
    )
} 