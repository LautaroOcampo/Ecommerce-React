import "./Main.css"

export const Item = (props) => {

    return(
        <div className="item-div">
            <img src={props.productos.img} className="item-img"></img>
            <p className="item-precio">{props.productos.precio}$</p>
        </div>
    )
}