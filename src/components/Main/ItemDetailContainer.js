import './Main.css'
import React, {useEffect, useState} from 'react'
import hamburguesaImg from "./img/Hamburguesa simple.png"
import { ItemDetail } from './ItemDetail'

export const ItemDetailContainer = () => {
    
    let hamburguesa = {
        id:1,
        carnes:1,
        queso:"cheddar",
        precio:700,
        img:hamburguesaImg
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
    <div className='detail-div'>
        {
            item &&
        <>
        <ItemDetail item={item}/>
        </>
        }
    </div>
    )
}