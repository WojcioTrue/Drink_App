import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
// As a basic setup, import your same slice reducers
import { setupStore } from "../app/store";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <BrowserRouter>
        <Provider store={store}>{children}</Provider>
      </BrowserRouter>
    );
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
