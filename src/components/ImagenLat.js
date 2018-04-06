import React from 'react';

const ImagenLat = (props) =>{
    return(
        <div class={props.claseWrapper}>
            <img src={props.source} alt={props.source}/>
            <p className="Nintendo-Switch">{props.nombre}</p>
            <p className="desc">{props.desc}</p>
        </div>    
    )
    
}

export default ImagenLat;