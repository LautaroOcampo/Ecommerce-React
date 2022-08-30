import "./Main.css"

export const Item = (props) => {

    return(
        <div className="item-div">
            <img src={props.hamburguesa.img} className="item-img"></img>
            <h4 className="item-h4">Características</h4>
            <p className="item-p">{props.hamburguesa.carnes} hamburguesas de 100grs</p>
            <p className="item-p">con queso {props.hamburguesa.queso}</p>
            <p className="item-p">{props.hamburguesa.precio}$</p>
        </div>
    )
}