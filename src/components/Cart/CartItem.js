import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export const CartItem = (props) => {

    let {removeProduct} = useContext(CartContext)

    return(
        <>
        <div class="c-item-div">
            
            <img class="c-item-img" src={props.item.img}></img>
            <div class="c-props-div">
                <p class="c-item-p">{props.item.nombre}</p>
                <p class="c-item-p">{props.item.quantity} Unidades</p>
                <p class="c-item-p">{props.item.precio}$ Cada una</p>
                <p class="c-item-p"><b>Total: {props.item.precio * props.item.quantity}$</b></p>
                <button class="c-button" onClick={() => removeProduct(props.item)}><i class="fa-solid fa-trash"></i></button>
            </div>
        </div>
        </>
    )
} 