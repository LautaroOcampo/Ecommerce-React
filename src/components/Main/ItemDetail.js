import "./Main.css"
import { ItemCount } from "./ItemCount"
import { Link } from "react-router-dom"
import { useState } from "react"

export const ItemDetail = (props) => {

    let [compra, setCompra] = useState(false)

    const onAdd = (msg) => {
        console.log(`Compro ${msg} ${props.item.tipo}`)
        setCompra(true)
    }

    return(
    <>
    <div class='detail-div'>
        <img class="detail-img" src={props.item.img}></img>
        <p class="detail-descripcion">{props.item.caracteristica}</p>
        <p class="detail-descripcion">{props.item.precio}$</p>
        <ItemCount initial="1" stock="10" onAdd={onAdd}/>
    </div>
    <Link to="/cart"><button hidden={!compra} class="finalizar-button">Finalizar Compra</button></Link>
    </>
    )
}