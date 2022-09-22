import React, { useEffect, useState } from "react";
import {collection, getDocs, query, where, limit, addDoc} from 'firebase/firestore'
import {db} from '../../utils/Firebase'

export const PaginaFirebase = () => {

    let [productos, setProductos] = useState([])

    const prueba = {nombre:"efnivujok", apellido:"enjiawfmosu"}

    

    useEffect(() => {
        const getData = async () => {
            const queryRef = query(collection(db, "Items"),where("tipo", "==", "hamburguesas"), limit(2))
            
            const response = await getDocs(queryRef)
            const docs = response.docs
            const data = docs.map(doc => {return{...doc.data(), id:doc.id}})
            setProductos(data)
            console.log(data)
        }
        getData()
    },[])
    const orden = () => {
        const queryy = collection(db, "pruebas")
        addDoc(queryy, prueba).then(res => console.log(res))
    }
    return(
        <>
            <p>HOAL</p>
            <button onClick={orden}>boton</button>
        </>
    )
}