import "./Main.css"

export const ItemDetail = (props) => {
    return(
    <>
        <img className="detail-img" src={props.item.img}></img>
        <h3 className="detail-h3">Caracteristicas</h3>
        <p className="detail-descripcion">{props.item.carnes} carne</p>
        <p className="detail-descripcion">queso {props.item.queso}</p>
        <p className="detail-descripcion">{props.item.precio}$</p>
    </>
    )
}