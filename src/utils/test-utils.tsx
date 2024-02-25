import React, { PropsWithChildren } from 'react'
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
// As a basic setup, import your same slice reducers
import { setupStore } from "../app/store";
import { MemoryRouter } from "react-router-dom";
import { AppStore, RootState } from "../app/store";
import "react-intersection-observer/test-utils";
import type { RenderOptions } from '@testing-library/react'


interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootState>
  store?: AppStore
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  } : ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return (
      <MemoryRouter>
        <Provider store={store}>{children}</Provider>
      </MemoryRouter>
    );
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
