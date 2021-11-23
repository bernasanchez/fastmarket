import React, {useState} from 'react'

const Counter = ({initial, stock, onAdd}) => {
    const [counter, setCounter] = useState(initial);
    
    const resta = () => {
        setCounter(counter -1);
        if (counter <= 0){
            alert("Debe seleccionar uno o mas productos")
        }else{
            console.log("Gracias por su compra")
        }
        
    };
    const suma = () => {
        setCounter(counter +1);
        if (counter > 9){
            alert("No hay mas stock")
        }else{
            console.log("Gracias por su compra")
        }
    
    };
    
    return (
        <div>
            <button onClick={resta}>-</button>
            <span>{counter}</span>
            <button onClick={suma}>+</button>
            <buttton onClick={onAdd}>
                <a href="#!" className="btn btn-outline-success">
                Agregar al Carrito
                </a>
            </buttton>
        </div>
    )
}
export default Counter;



//Quitar y Agregar Productos con handleOp y funcion flecha
// const handleOp = (simbolo) => {
//     simbolo === "-" ? setCounter(counter - 1) : setCounter(counter + 1);
// };
// return (
//     <div>
//         <button onClick={() => handleOp("-")}>-</button>
//         <span>{counter}</span>
//         <button onClick={() => handleOp("+")}>+</button>
//         <buttton onClick={onAdd}>
//             <a href="#!" className="btn btn-outline-success">
//             Agregar al Carrito
//             </a>
//         </buttton>
//     </div>
// )