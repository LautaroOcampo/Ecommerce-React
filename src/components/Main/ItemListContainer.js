import "./Main.css"
import { ItemCount } from './ItemCount'
import { ItemList } from "./ItemList"

export const ItemListContainer = () => {
    return(
        <>
            <ItemList></ItemList>
            <ItemCount initial="1" stock="10"></ItemCount>
        </>
    )
}