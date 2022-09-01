import "./Main.css"

export const Item = (props) => {

    return(
        <div className="item-div">
            <img src={props.hamburguesa.img} className="item-img"></img>
            <p className="item-precio">{props.hamburguesa.precio}$</p>
        </div>
    )
}