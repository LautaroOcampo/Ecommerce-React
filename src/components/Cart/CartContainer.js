import './Cart.css'
import { CartContext } from '../../contexts/CartContext.js'
import { useContext } from 'react'
import { CartItem } from './CartItem'
import { Link } from 'react-router-dom'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../utils/Firebase'

export const CartContainer = () => {
    
    const {productCartList} = useContext(CartContext)

    const {totalPrice} = useContext(CartContext)

    const buy = (e) => {
        e.preventDefault()

        const order ={
            buyer:{
                name: e.target[0].value,
                phone: e.target[1].value,
                email: e.target[2].value
            },
            item:{
                items: productCartList,
                date: Date(),
                total: totalPrice
            }
        }

        const query = collection(db, "Orders")
        addDoc(query, order)
    }

    const list = productCartList.map((item) =>
            <>
                <CartItem key={item.id} item={item}/>
            </>
            )

    return(
    <section class="c-section">
        {   
            productCartList.length > 0
            
            ?
            <>
            {list}
            <div class="c-precio-total-div">
                <p class="c-precio-total" >Precio Total: {totalPrice}$</p>
            </div>
            <form class="c-form" onSubmit={buy}>
                <input class="c-input" type="text" placeholder='Name' required></input>
                <input class="c-input" type="number" placeholder='Phone' required></input>
                <input class="c-input" type="email" placeholder='Email' required></input>
                <button type="submit" class="c-button-form">Buy</button>
            </form>

            </>
            : 
            <div class="c-msg-div">
                <p class="c-msg">No hay productos en el carrito</p>
                <Link to="/"><button class="c-msg-button" >Volver al menu</button></Link>
            </div>
        }
    </section>
    )
}