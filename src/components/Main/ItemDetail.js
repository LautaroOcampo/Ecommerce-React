import "./Main.css"
import { ItemCount } from "./ItemCount"

export const ItemDetail = (props) => {
    return(
    <>
        <img class="detail-img" src={props.item.img}></img>
        <p class="detail-descripcion">{props.item.caracteristica}</p>
        <p class="detail-descripcion">{props.item.precio}$</p>
        <ItemCount initial="1" stock="10"/>
        <button class="detail-button">Agregar al carrito</button>
    </>
    )
}