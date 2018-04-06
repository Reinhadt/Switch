import React from 'react';

const Producto = (props) =>{

    return(
        <div onClick={ () => props.clickAccesorio(props.precio, props.nombre)} >
            <img src={props.imagen} />
            <p>{props.nombre}</p>
        </div>
    )

}

export default Producto;