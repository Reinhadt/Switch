import React from 'react';

const Producto = (props) =>{

    return(
        <div onClick={ () => props.clickProducto(props.precio, props.imgGrande, props.wrapper, props.nombre, props.desc)} >
            <img src={props.imagen} />
            <p>{props.nombre}</p>
        </div>
    )

}

export default Producto;