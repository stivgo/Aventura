import data from "./data";
import React, { Component } from "react";
import Opciones from "./Opciones";
import Recordatorio from "./Recordatorio";

class Layout extends Component {
    constructor(props) {
      super(props);
      this.state = {
        posicion: 0,
        historia: "",
        historial: []
      };
    }
    handleClick = (e) =>{
      e.preventDefault()
      let seleccion = e.target.textContent;
      let posicion
      let ultimaPosicion = this.state.historial[this.state.historial.length - 1];
      console.log(this.state.historial.length-1)
      if(this.state.historial.length-1 < 3){
        if(seleccion === 'A'){
          if(ultimaPosicion === 'A'){
            posicion = 2
          }
          else if(ultimaPosicion === 'B'){
            posicion = 1
          }else{
            posicion = 1
          }
        }else{
          if(ultimaPosicion === 'B'){
            posicion = 2
          }
          else if(ultimaPosicion === 'A'){
            posicion = 3
          }else{
            posicion = 2
          }
        }
        this.setState({
          historial: [...this.state.historial, seleccion],
          posicion: this.state.posicion + posicion,
          historia: seleccion
        })
      }else{
        alert("Fin")
      }
      
    }
    
    render() {
        return (
          <div className="layout">
            <h1 className="historia"> {data[this.state.posicion].historia}</h1>
            <Opciones 
              opcionA={data[this.state.posicion].opciones.a} 
              opcionB={data[this.state.posicion].opciones.b}
              onClick={this.handleClick}
            />
            <Recordatorio 
              seleccionAnt={this.state.historia} 
              historial={this.state.historial}/>
          </div>
        );
    }
}

export default Layout;
