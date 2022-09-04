
import './Navbar.css'
import {CartWidget} from './CartWidget'
import Logo from "./Logo.png"
import {Link} from 'react-router-dom'

export const Navbar = () => {
    return(
        <div className="main-div">
            <div className="navbar-div">
                <div className='logo-div'>
                    <Link to="/">
                    <img className='logo' src={Logo}></img>
                    </Link>
                </div>
                <div className='navbar'>
                    <Link to="comidas/hamburguesas" className='navbar-item'>Hamburguesas</Link>
                    <Link to="comidas/guarniciones" className='navbar-item'>Guarnicion</Link>
                    <Link to="comidas/bebidas" className='navbar-item'>Bebida</Link>
                    <CartWidget></CartWidget>
                </div>
            </div>
        </div>
    )
}

export default Navbar