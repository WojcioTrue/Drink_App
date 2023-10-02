import { setupServer } from "msw/node";
import { screen, waitForElementToBeRemoved } from "@testing-library/react";
import { renderWithProviders } from "../../utils/test-utils";
import DrinkInfo from "./DrinkInfo";
import { rest } from "msw";
import "react-intersection-observer/test-utils";


describe('test for single drink with mocked data', () => {
    test('display component', () => {
        renderWithProviders(<DrinkInfo/>)
        screen.debug()
    })
})