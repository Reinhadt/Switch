import React, { Component } from 'react';
import './App.css';
import Productos from './source'
import ImagenLat from './components/ImagenLat';
import ProductoHub from './components/ProductoHub';
import Precio from './components/Precio';


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      nombre: "",
      precioConsola: 0,
      precioAccesorio: 0,
      total: 0,
      foto: "",
      selected: true
    }

    this.consolas = Productos[0].consolas;
    this.accesorios = Productos[1].accesorios;

  }

  componentWillMount(){
    const switchInicial = this.consolas.switchNeon;
    this.setState({
      nombre: switchInicial.nombre,
      precioConsola: switchInicial.precio,
      foto: "",
      selected: true
    })
  }

  render() {
    return (
      <div className="App container-white">
        <p className="elige">Elige cómo deseas comprar tu Nintendo Switch</p>
        <ImagenLat source={this.state.foto}/>
        <Precio leyenda="1. Elige un color" cantidad={this.state.precioConsola} />
        <ProductoHub prod={this.consolas} />
        <Precio leyenda="2. Elige un accesorio" cantidad={this.state.precioAccesorio} />
        <ProductoHub prod={this.accesorios} />
      </div>
    );
  }
}

export default App;
