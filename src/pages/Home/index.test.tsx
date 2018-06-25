import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { Home } from "./index";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <HashRouter>
      <Home />
    </HashRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
