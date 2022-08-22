import React, { Component } from "react";

import { connect } from "react-redux";
import Trait from "./Trait";
import { addTrait } from "../../js/actions/traitsActions";

const mapStateToProps = (state) => {
  return {
    traits: state.traits,
  };
};
const mapDispatchToProps = {
  addTrait,
};

class Traits extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  getTraits() {
    let traits = [];
    if (this.props.traits.length > 0) {
      this.props.traits.forEach((trait) => {
        traits.push(<Trait key={trait.id} id={trait.id} trait={trait.trait} />);
      });
    }
    return <div>{traits}</div>;
  }
  render() {
    let { addTrait } = this.props;
    return (
      <div className="Traits">
        <div className="TraitsTitle">Talents &amp; Traits</div>
        <div>
          {this.getTraits()}
          <button
            type="button"
            className="ui small button addNewTrait"
            onClick={addTrait}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Traits);
