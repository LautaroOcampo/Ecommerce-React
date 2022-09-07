import "./Main.css"
import { ItemCount } from "./ItemCount"

export const ItemDetail = (props) => {

    const onAdd = (msg) => {
        console.log(`Compro ${msg} ${props.item.tipo}`);
    }

    return(
    <>
        <img class="detail-img" src={props.item.img}></img>
        <p class="detail-descripcion">{props.item.caracteristica}</p>
        <p class="detail-descripcion">{props.item.precio}$</p>
        <ItemCount initial="1" stock="10" onAdd={onAdd}/>
    </>
    )
}