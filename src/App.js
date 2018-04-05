import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Productos from './source'
import ImagenLat from './components/ImagenLat';
import Producto from './components/Producto';
import Precio from './components/Precio';


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      nombre: "",
      precio: "",
      foto: "",
      selected: true
    }

  }

  componentWillMount(){
    const switchInicial = Productos[0].consolas.switchNeon;
    this.setState({
      nombre: switchInicial.nombre,
      precio: switchInicial.precio,
      foto: "",
      selected: true
    })
  }

  render() {
    return (
      <div className="App container-white">
        <p className="elige">Elige cómo deseas comprar tu Nintendo Switch</p>
        <ImagenLat source={this.state.foto}/>
        <Precio leyenda="1. Elige un color" cantidad={this.state.precio} />
      </div>
    );
  }
}

export default App;
