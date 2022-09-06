import './Main.css'
import React, {useEffect, useState} from 'react'
import { ItemDetail } from './ItemDetail'
import { productos } from '../BaseDeDatos'
import { useParams } from 'react-router-dom'

export const ItemDetailContainer = () => {
    
    let idProducto = parseInt(useParams().idProducto)
    let [arrayItems, setArrayItems] = useState([])

    const getItem = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
            }, 2000)
        })
    }

    useEffect(() => {
        const funcionAsync = async ()=>{
            arrayItems = await getItem()
            let item = arrayItems.filter(ele => ele.id === idProducto)
            setArrayItems(item)
        }
        funcionAsync()
    },[])
    
    return(
    <div class='detail-div'>
        {
            arrayItems[0] &&
        <>
        <ItemDetail item={arrayItems[0]}/>
        </>
        }
    </div>
    )
}