import React, {Component} from 'react';
import _ from 'lodash';
import Producto from './Producto';

class ProductoHub extends Component{


    render(){

        let renderConsolas;
        renderConsolas = _.map(this.props.prod, (el) => {
            return(
                <Producto nombre={el.nombre} precio={el.precio} key={el.nombre}/>
            )
        })
        


        return(
            <div>
                {renderConsolas}
            </div>
        )
    }

}

export default ProductoHub;