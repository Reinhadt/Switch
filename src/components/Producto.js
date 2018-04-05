import React from 'react';

const Producto = (props) =>{

    return(
        <div>
            <p>{props.nombre}</p>
            <p>${props.precio}</p>
        </div>
    )

}

export default Producto;