import React, { useEffect, useState } from "react";
import {collection, getDocs} from 'firebase/firestore'
import {db} from '../../utils/Firebase'

export const PaginaFirebase = () => {

    let [productos, setProductos] = useState([])

    useEffect(() => {
        const getData = async () => {
            const query = collection(db, "Items")
            const response = await getDocs(query)
            const docs = response.docs
            const data = docs.map(doc => {return{...doc.data(), id:doc.id}})
            setProductos(data)
            console.log(productos)
        }
        getData()
    },[])

    return(
        <>
            <p>HOAL</p>
        </>
    )
}