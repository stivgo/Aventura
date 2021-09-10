import data from "./data";
import React, { Component } from "react";
import Opciones from "./Opciones";
import Recordatorio from "./Recordatorio";

class Layout extends Component {
    render() {
        return (
          <div className="layout">
            <h1 className="historia"> Un día como cualquiera te vas a dormir, lo siguiente que sabes es que te despertas en el medio de un bosque.</h1>
            <Opciones/>
            <Recordatorio/>
          </div>
        );
    }
}

export default Layout;
