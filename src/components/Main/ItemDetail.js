import "./Main.css"
import { ItemCount } from "./ItemCount"

export const ItemDetail = (props) => {
    return(
    <>
        <img className="detail-img" src={props.item.img}></img>
        <h3 className="detail-h3">Caracteristicas</h3>
        <p className="detail-descripcion">{props.item.caracteristica}</p>
        <p className="detail-descripcion">{props.item.precio}$</p>
        <ItemCount initial="1" stock="10"/>
        </>
    )
}