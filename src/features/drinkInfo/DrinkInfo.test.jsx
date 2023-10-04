import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import DrinkInfo from "./DrinkInfo";
import "react-intersection-observer/test-utils";
import { MemoryRouter, useParams} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../app/store";

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
        id: "17105",
    })
}))

const customRoute = "/drink/17105";
describe("test for single drink with provided route parameter", () => {
  test("display component", async () => {
    render(
      <MemoryRouter initialEntries={[customRoute]}>
        <Provider store={store}>
          <DrinkInfo />
        </Provider>
      </MemoryRouter>
    );

    await waitForElementToBeRemoved(await screen.findByText(/Loading.../i));

    screen.debug()
  });
});
