import {useState} from "react"
import "./Main.css"


export const ItemCount = (props) => {
    
    let [productosNum, setProductosNum] = useState(props.initial)

    const sumar = () => {
        if(productosNum <= props.stock)
            setProductosNum(productosNum++)
    }
    
    const restar = () => {
        if(productosNum > 0)
            setProductosNum(productosNum--)
    }
    
    return(
        <div className="boton-div">
            <button className="boton" onClick={sumar}>+</button>
            <p className="numero">{productosNum}</p>
            <button className="boton" onClick={restar}>-</button>
        </div>
    )
}
