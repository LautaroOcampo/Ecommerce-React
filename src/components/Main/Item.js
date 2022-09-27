import "./Main.css"
import { Link } from "react-router-dom"

export const Item = (props) => {

    return(
            <Link key={`${props.productos.id}`} class="item-div" to={`/item/${props.productos.id}`}>
                <div class="item-img-div">
                    <img src={props.productos.img} class="item-img"></img>
                </div>
                <div class="item-precio-div">
                    <p>{props.productos.nombre}</p>
                    <p class="d-item-precio">{props.productos.precio}$</p>
                </div>
            </Link>
    )
}