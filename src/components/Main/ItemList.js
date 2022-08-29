import "./Main.css"
import { Item } from './Item'
import h1 from "./img/Hamburguesa simple.jpg"
import h2 from "./img/Hamburguesa doble.jpg"
import h3 from "./img/Hamburguesa dambo.jpg"
import h4 from "./img/Hamburguesa roquefort.jpg"

export const ItemList = () => {
    class Hamburguesa {
        constructor(id,carne,queso,precio,img){
            this.id = id
            this.carne = carne
            this.queso = queso
            this.precio = precio
            this.img = img
        }
    }

    const hamburguesas = [
        new Hamburguesa(1,1,"cheddar",700,h1),
        new Hamburguesa(2,2,"cheddar",1000,h2),
        new Hamburguesa(3,1,"danbo",1100,h3),
        new Hamburguesa(4,1,"roquefort",1300,h4)
    ]

    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(hamburguesas)
            reject("Hubo un error con los datos")
        },2000)
    })
    .then(res => console.log(res))
    .catch(error => console.log(error))


    return(
        <div className="items-div">
            <div className="row-items">
                <Item id={hamburguesas[0].id} carne={hamburguesas[0].carne} queso={hamburguesas[0].queso} precio={hamburguesas[0].precio} img={hamburguesas[0].img}></Item>
                <Item id={hamburguesas[1].id} carne={hamburguesas[1].carne} queso={hamburguesas[1].queso} precio={hamburguesas[1].precio} img={hamburguesas[1].img}></Item>
            </div>
            <div className="row-items">
                <Item id={hamburguesas[2].id} carne={hamburguesas[2].carne} queso={hamburguesas[2].queso} precio={hamburguesas[2].precio} img={hamburguesas[2].img}></Item>
                <Item id={hamburguesas[3].id} carne={hamburguesas[3].carne} queso={hamburguesas[3].queso} precio={hamburguesas[3].precio} img={hamburguesas[3].img}></Item>
            </div>
        </div>
    );
}