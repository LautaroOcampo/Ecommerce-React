import { Link } from 'react-router-dom'
import './Navbar.css'

export const CartWidget = () => {
    return(
        <Link to="/cart"><i class="fa-solid fa-cart-shopping cart"></i></Link>
    )
}