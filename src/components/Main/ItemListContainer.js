import "./Main.css"
import React, {useEffect,useState} from 'react'
import { useParams } from "react-router-dom"
import { ItemList } from "./ItemList"
import { productos } from "../BaseDeDatos"

export const ItemListContainer = () => {

    let tipoProducto = useParams().tipoProducto


    let [lista, setLista] = useState([])
    
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
            lista[0] &&
            <>
            <ItemList lista={lista}/>
            </>
        }
        </>
    )
}