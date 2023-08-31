import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { screen } from "@testing-library/react";
// We're using our own custom render function and not RTL's render.
import { renderWithProviders } from "../../utils/test-utils.jsx";
import CoctailList from "./CoctailList";

test('check if categories of drinks display gin', () => {
    renderWithProviders(<CoctailList/>)
    
    screen.debug()

})