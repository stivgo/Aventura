import React, { Component } from "react";

class Opciones extends Component {
  render() {
    return (
      <section className="opciones">
        <article className="opcion">
          <button className="botones">A</button>
          <p>Pedir ayuda a los gritos</p>
        </article>
        <article className="opcion">
          <button className="botones">B</button>
          <p>Mirar a mi alrededor</p>
        </article>
      </section>
    );
  }
}

export default Opciones;
