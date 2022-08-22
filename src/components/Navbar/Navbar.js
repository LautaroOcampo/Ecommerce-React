
import './Navbar.css'
import {CartWidget} from './CartWidget'
import Logo from "./Logo.png"

export const Navbar = () => {
    return(
        <div className="main-div">
            <div className="navbar-div">
                <div className='logo-div'>
                    <img className='logo' src={Logo}></img>
                </div>
                <div className='navbar'>
                    <div className='navbar-item'>Hamburguesas</div>
                    <div className='navbar-item'>Guarnicion</div>
                    <div className='navbar-item'>Bebida</div>
                    <CartWidget></CartWidget>
                </div>
            </div>
        </div>
    )
}

export default Navbar