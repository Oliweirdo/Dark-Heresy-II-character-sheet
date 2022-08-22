import React, { Component } from "react";

import Traits from "../Traits/Traits";
import css from "../../css/styles.css";
import Header from "../UiComponents/Header";
import SideDrawer from "../UiComponents/SideDrawer";

class CharacterSheet extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    const sideDrawer = <SideDrawer />;
    return (
      <div className="CharacterSheet">
        <Traits />
        {sideDrawer}
      </div>
    );
  }
}

export default CharacterSheet;
