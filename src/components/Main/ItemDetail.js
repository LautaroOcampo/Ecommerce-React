import "./Main.css"

export const ItemDetail = (props) => {
    return(
    <div className="detail-div">
        <p className="detail-descripcion">{props.item.descripcion}</p>
        <img className="detail-img" src={props.item.img}></img>
    </div>
    )
}