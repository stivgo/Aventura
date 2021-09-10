import React, { Component } from "react";

class Opciones extends Component {
  render() {
    return (
      <section className="opciones">
        <article className="opcion">
          <button className="botones" onClick={this.props.onClick}>A</button>
          <p>{this.props.opcionA}</p>
        </article>
        <article className="opcion">
          <button className="botones" onClick={this.props.onClick}>B</button>
          <p>{this.props.opcionB}</p>
        </article>
      </section>
    );
  }
}

export default Opciones;
