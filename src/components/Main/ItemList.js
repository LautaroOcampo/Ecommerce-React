import "./Main.css"
import { Item } from './Item'
import { Link } from "react-router-dom"

export const ItemList = (props) => {
    

    return(
            <div className="items-div">
                {props.lista.map((ele) => {
                    return(
                    <Link to={`/${ele.id}`}>
                        <Item productos={ele}/>
                    </Link>
                    )
                })}
            </div>
    );
}