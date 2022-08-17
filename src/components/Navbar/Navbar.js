
import './Navbar.css'
import Logo from "./Logo.png"

const Navbar = () => {
    return(
        <div className="main-div">
            <div className="navbar-div">
                <div className='logo-div'>
                    <img className='logo' src={Logo}></img>
                </div>
                <div className='navbar'>
                    <div className='navbar-item'>Hamburguesa</div>
                    <div className='navbar-item'>Papas fritas</div>
                    <div className='navbar-item'>Bebidas</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar