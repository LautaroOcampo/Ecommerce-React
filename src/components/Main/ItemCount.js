import "./Main.css"


export const ItemCount = (props) => {
    
    
    const sumar = () => {
        let carrito = document.getElementById("carrito")
        if(carrito.innerText >= 1 && carrito.innerText < parseInt(props.stock)){
            console.log(props.stock);
            carrito.innerText++
        }
    }
    
    const restar = () => {
        let carrito = document.getElementById("carrito")
        if(carrito.innerText > 1 && carrito.innerText <= parseInt(props.stock)){
            console.log(props.stock)
            carrito.innerText--
        }
    }
    
    return(
        <div className="boton-div">
            <button className="boton" onClick={sumar}>+</button>
            <p className="numero" id="carrito">{props.initial}</p>
            <button className="boton" onClick={restar}>-</button>
        </div>
    )
}
