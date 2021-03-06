import React, {Component} from 'react';
import _ from 'lodash';
import Producto from './Producto';

class ProductoHub extends Component{



    render(){

        let renderConsolas;
        renderConsolas = _.map(this.props.prod, (el) => {
            return(
                <div className="producto">
                    <Producto 
                        clickProducto={this.props.clickProducto} 
                        nombre={el.nombre} 
                        precio={el.precio} 
                        imagen={el.foto} 
                        imgGrande={el.fotoGrande} 
                        wrapper={el.colorPred}
                        desc={el.desCorta}
                        key={el.nombre}/>
                </div>        
            )
        })
        
        return(
            <div className="hubProducto">
                {renderConsolas}
            </div>
        )
    }

}

export default ProductoHub;