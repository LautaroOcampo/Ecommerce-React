import './Main.css'
import React, {useEffect, useState} from 'react'
import hamburguesaImg from "./img/Hamburguesa simple.png"
import { ItemDetail } from './ItemDetail'

export const ItemDetailContainer = () => {
    
    let hamburguesa = {
        img: hamburguesaImg,
        descripcion: "Con la carne de las mejores granjas del mundo"
    }

    let [item, setItem] = useState()

    const getItem = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(hamburguesa)
            }, 2000)
        })
    }

    useEffect(() => {
        const funcionAsync = async ()=>{
                item = await getItem()
                setItem(item)  
        }
        funcionAsync()
    },[])
    
    return(
    <div className='detail-banner'>
        {
            item &&
        <>
        <ItemDetail item={item}/>
        </>
        }
    </div>
    )
}