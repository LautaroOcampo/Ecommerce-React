import './Cart.css'
import { CartContext } from '../../contexts/CartContext.js'
import { useContext } from 'react'
import { CartItem } from './CartItem'

export const CartContainer = () => {
    const {productCartList} = useContext(CartContext)
    return(
    <div>
        {
            productCartList.map((item) =>
                <CartItem key={item.id} item={item}/>
            )
        }
    </div>
    )
}