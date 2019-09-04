//*~ Importando o React
import React from "react";
import {Component} from "react";


class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {addClass: false}
  }
  toggle() {
    this.setState({addClass: !this.state.addClass});
  }

  render () {
    let boxMenu = ["list-simulator-options", "type-opt"];
    if(this.state.addClass) {
      boxMenu.push('is-active');
    }
    return (
      <section className="section-menu">
        <div className={boxMenu.join(' ')}>
          <div className="options">
          </div>
        </div>
        <div className="menu-simulator">
          <nav className="Navigator">
            <ul className="simulator-menu-itens">
              <li className="item" onClick={this.toggle.bind(this)}>{this.state.addClass}
                <img src={require('../../assets/images/marcos.png')} />
                <p>Textura</p>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    )
  }
}

export default Menu;
