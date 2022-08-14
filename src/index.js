import React, { Component } from "react";

import { Provider } from "react-redux";
import store from "./js/store/store";
import ReactDOM from "react-dom";

import CharacterSheet from "./Components/Character/Character/CharacterSheet";

function layout() {
  return (
    <Provider store={store}>
      <div className="Layout">
        <CharacterSheet />
      </div>
    </Provider>
  );
}

ReactDOM.render(
  React.createElement(layout, null),
  document.getElementById("app")
);

//module.hot.accetpt();
