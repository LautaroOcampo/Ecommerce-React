import './Cart.css'
import { CartContext } from '../../contexts/CartContext.js'
import { useContext } from 'react'
import { CartItem } from './CartItem'
import { Link } from 'react-router-dom'

export const CartContainer = () => {
    const {productCartList} = useContext(CartContext)
    return(
    <div>
        {   
            productCartList.length > 0
            
            ?
            productCartList.map((item) =>
            <>
                <CartItem key={item.id} item={item}/>
            </>
            )
            : 
            <div class="c-msg-div">
                <p class="c-msg">No hay productos en el carrito</p>
                <Link to="/"><button class="c-msg-button" >Volver al menu</button></Link>
            </div>
        }
    </div>
    )
}