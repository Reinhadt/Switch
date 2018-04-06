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
    this.changeFoto.bind(this);

  }

  componentWillMount(){
    const switchInicial = this.consolas.switchNeon;
    this.setState({
      nombre: switchInicial.nombre,
      precioConsola: switchInicial.precio,
      foto: switchInicial.fotoGrande,
      claseContainer: "container-blue",
      descripcion: switchInicial.desCorta,
      selected: true
    })
  }

  changeFoto(precio, imagen, wrapper, nombre, desc){
    console.log({precio, imagen, desc});

    this.setState({
      nombre: nombre,
      precioConsola: precio,
      foto: imagen,
      claseContainer: wrapper,
      descripcion: desc
    })

  }

  changeAccesorio(precio){
    this.setState({

    })
  }

  //TODO:
  //Arreglar el state para que soporte la multiselección o tener estructura de data 
  //Arreglar state para que pueda sumar los totales de precio (qué estructura necesito)
  //Click en joycon con función que actualiza la nueva estructura de state.

  render() {
    return (
      <div className="App">
        <ImagenLat 
          source={this.state.foto} 
          claseWrapper={this.state.claseContainer} 
          nombre={this.state.nombre} 
          desc={this.state.descripcion}/>
        <div className="container-white">
        <p className="elige">Elige cómo deseas comprar tu Nintendo Switch</p>
          <Precio leyenda="1. Elige un color" cantidad={this.state.precioConsola} />
          <ProductoHub clickProducto={ this.changeFoto.bind(this) } prod={this.consolas} clase="consola" />
          <Precio leyenda="2. Elige un accesorio" cantidad={this.state.precioAccesorio} />
          <ProductoHub clickAccesorio={ this.changeFoto.bind(this) }  prod={this.accesorios} clase="accesorio"/>
        </div>
      </div>
    );
  }
}

export default App;
