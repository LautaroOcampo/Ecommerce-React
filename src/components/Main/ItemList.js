import "./Main.css"
import { Item } from './Item'
import { Link } from "react-router-dom"

export const ItemList = (props) => {
    

    return(
            <div class="items-div">
                {props.lista.map((ele) => {
                    return(
                    <Link key={`${ele.id}`} class="item-precio" to={`/item/${ele.id}`}>
                        <Item productos={ele}/>
                    </Link>
                    )
                })}
            </div>
    );
}