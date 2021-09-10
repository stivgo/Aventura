import React, { Component } from "react";

class Recordatorio extends Component {
  render() {
    return (
      <section className="recordatorio">
        <h3>Selección anterior: {this.props.seleccionAnt}</h3>
        <h4>Historial de opciones elegidas: </h4>
        <ul>
          {this.props.historial.map(
            (historia, index) => {
              return <li key={index}>{historia}</li>
            }
          )}
        </ul>
      </section>
    );
  }
}

export default Recordatorio;
