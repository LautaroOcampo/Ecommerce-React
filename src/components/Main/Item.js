import "./Main.css"

export const Item = (props) => {

    return(
        <div class="item-div">
            <img src={props.productos.img} class="item-img"></img>
            <p class="item-precio">{props.productos.precio}$</p>
        </div>
    )
}