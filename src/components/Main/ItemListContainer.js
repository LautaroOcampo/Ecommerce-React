import "./Main.css"
import React, {useEffect,useState} from 'react'
import { ItemCount } from './ItemCount'
import { ItemList } from "./ItemList"
import h1 from "./img/Hamburguesa simple.jpg"
import h2 from "./img/Hamburguesa doble.jpg"
import h3 from "./img/Hamburguesa dambo.jpg"
import h4 from "./img/Hamburguesa roquefort.jpg"

export const ItemListContainer = () => {

    let [lista, setLista] = useState([])

    const hamburguesas = [
        {
            id:1,
            carnes:1,
            queso:"cheddar",
            precio:700,
            img:h1,
        },
        {
            id:2,
            carnes:2,
            queso:"cheddar",
            precio:1000,
            img:h2,
        },
        {
            id:3,
            carnes:1,
            queso:"danbo",
            precio:900,
            img:h3,
        },
        {
            id:4,
            carnes:1,
            queso:"roquefort",
            precio:1100,
            img:h4,
        }
    ]
    
    const obtenerHamburguesas = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(hamburguesas)
            }, 2000)
        })
    }

    
    useEffect(() => {
        const funcionAsync = async ()=>{
            
                lista = await obtenerHamburguesas()
                setLista(lista)  
            
    
        }
        funcionAsync()
    },[])



    return(
        <>
        {
            lista.length > 0 &&
            <>
            <ItemList lista={lista}></ItemList>
            </>
        }
            <ItemCount initial="1" stock="10"></ItemCount>
        </>
    )
}