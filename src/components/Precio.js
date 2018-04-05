import React from 'react'

const Precio = (props) =>{
    return(
        <div className="precioHub">
            <p>{props.leyenda}</p>
            <p className="precio">${props.cantidad}</p>
        </div>
    );
}

export default Precio;