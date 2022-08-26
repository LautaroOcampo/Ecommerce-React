import "./Main.css"
import { ItemCount } from './ItemCount'

export const ItemListContainer = (props) => {
    return(
        <>
            <p className="lorem">{props.mensaje}</p>
            <ItemCount initial="1" stock="10"></ItemCount>
        </>
    )
}