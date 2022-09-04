import "./Main.css"
import React, {useEffect,useState} from 'react'
import { useParams } from "react-router-dom"
import { ItemCount } from './ItemCount'
import { ItemList } from "./ItemList"
import h1 from "./img/Hamburguesa simple.png"
import h2 from "./img/Hamburguesa doble.png"
import h3 from "./img/Hamburguesa dambo.png"
import h4 from "./img/Hamburguesa roquefort.png"
import g1 from "./img/Papas Fritas.png"
import g2 from "./img/Papa al horno.png"
import g3 from "./img/Nuggets.png"
import g4 from "./img/Aros de cebolla.png"
import b1 from "./img/Agua.png"
import b2 from "./img/Coca.png"
import b3 from "./img/Sprite.png"
import b4 from "./img/Fanta.png"

export const ItemListContainer = () => {

    let tipoProducto = useParams().tipoProducto


    let [lista, setLista] = useState([])

    const productos = [
        {id:1, tipo:"hamburguesas" ,carnes:1, queso:"cheddar", precio:700, img:h1},
        {id:2, tipo:"hamburguesas" ,carnes:2, queso:"cheddar", precio:1000, img:h2,},
        {id:3, tipo:"hamburguesas" ,carnes:1, queso:"danbo", precio:900, img:h3},
        {id:4, tipo:"hamburguesas" ,carnes:1, queso:"roquefort", precio:1100, img:h4,},
        {id:5, tipo:"guarniciones" ,cantidad: 30, precio:400, img:g1},
        {id:6, tipo:"guarniciones" ,cantidad: 1, precio:300, img:g2},
        {id:7, tipo:"guarniciones" ,cantidad: 8, precio:500, img:g3},
        {id:8, tipo:"guarniciones" ,cantidad: 8, precio:500, img:g4},
        {id:9, tipo:"bebidas" ,cantidad:"600ml", precio:200, img:b1},
        {id:10, tipo:"bebidas" ,cantidad:"500ml", precio:300, img:b2},
        {id:11, tipo:"bebidas" ,cantidad:"500ml" ,precio:300 , img:b3},
        {id:12, tipo:"bebidas" ,cantidad:"500ml" ,precio:300 , img:b4}
    ]
    
    const obtenerProductos = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
            }, 2000)
        })
    }

    
    useEffect(() => {
        const funcionAsync = async ()=>{
            lista = await obtenerProductos()
            if(tipoProducto){
                let nuevaLista = lista.filter(ele => ele.tipo === tipoProducto)
                setLista(nuevaLista)
            }else{
                setLista(lista)
            }
        }
        funcionAsync()
    },[tipoProducto])



    return(
        <>
        {
            lista.length > 0 &&
            <>
            <ItemList lista={lista}/>
            </>
        }
            <ItemCount initial="1" stock="10"/>
        </>
    )
}