import React, {Component} from 'react';
import _ from 'lodash';
import Accesorio from './Accesorio';

class AccesorioHub extends Component{
    render(){

        let renderAccesorio;
        renderAccesorio = _.map(this.props.prod, (el) => {
            return(
                <div className="producto">
                    <Producto 
                        clickAccesorio={this.props.clickAccesorio} 
                        nombre={el.nombre} 
                        precio={el.precio} 
                        imagen={el.foto} 
                        key={el.nombre}/>
                </div>        
            )
        })
        
        return(
            <div className="hubProducto">
                {renderAccesorio}
            </div>
        )
    }

}

export default ProductoHub;