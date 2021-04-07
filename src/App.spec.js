import React from "react";
import { mount } from "@cypress/react";
import App from "./App.js";

describe("<App/>", () => {
  it("should say hello", () => {
    mount(<App name="World" />);
    cy.contains("h1", "Hello World");
  });
});
