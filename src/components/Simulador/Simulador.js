//*~ Importando o React
import React from "react";

const Simulador = () => (
  <section>
    <div id="divWrapper" class="main-wrapper">
    <div class="viewport" id="divView">
      <div class="panel">
        <div class="content">
          <div id="divWall" class="wall"></div>
            <div id="divMarcos" class="marco">
              <div id="divDoor" class="door"></div>
              <div id="divKnop" class="knob"></div>
            </div>
            <div id="divFloor" class="floor"></div>
            <div id="divObject" class="object"></div>
            <div id="divFooter" class="footer">
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>
);

export default Simulador;