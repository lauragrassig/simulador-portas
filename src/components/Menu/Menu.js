//*~ Importando o React
import React from "react";
import {Component} from "react";

class Menu extends Component {

  render () {
    return (
      <section className="section-menu">
        <div className="list-simulator-options type-opt" id="simulatorType">
          <div className="options" id="optionsPorta">
          </div>
        </div>
        <div className="menu-simulator" id="menuMobile">
          <nav className="Navigator">
            <ul className="simulator-menu-itens">
              <li className="item" id="btType">
                {/* <img src="../../images/textura.png" alt=""/>
                <p>Textura</p> */}
              </li>
            </ul>
          </nav>
        </div>
      </section>
    )
  }
}

export default Menu;
