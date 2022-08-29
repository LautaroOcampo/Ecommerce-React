import "./Main.css"

export const Item = (props) => {

    return(
        <div className="item-div">
            <img src={props.img} className="item-img"></img>
            <h4 className="item-h4">Características</h4>
            <p className="item-p">{props.carne} hamburguesas de 100grs</p>
            <p className="item-p">con queso {props.queso}</p>
            <p className="item-p">{props.precio}$</p>
        </div>
    )
}