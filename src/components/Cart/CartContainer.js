import './Cart.css'
import { ThemeContext } from '../../contexts/ThemeContext'
import { useContext } from 'react'

export const CartContainer = () => {
    const context = useContext(ThemeContext)
    return(
    <>
        <p>CARRITO</p>
        <p>{context.texto}</p>
        
    </>
    )
}