//*~ Importando o React
import React from "react";

const Simulador = () => (
  <section>
    <div id="divWrapper" className="main-wrapper">
    <div className="viewport" id="divView">
      <div className="panel">
        <div className="content">
          <div id="divWall" className="wall"></div>
            <div id="divMarcos" className="marco">
              <div id="divDoor" className="door"></div>
              <div id="divKnop" className="knob"></div>
            </div>
            <div id="divFloor" className="floor"></div>
            <div id="divObject" className="object"></div>
            <div id="divFooter" className="footer">
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>
);

export default Simulador;