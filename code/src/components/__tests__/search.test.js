import { render, screen, fireEvent } from "@testing-library/react";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../Mocks/resCardResponse.json";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should search works in body component", async () => {
  await act(async () => {
    return render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  const searchButton = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchId");
  fireEvent.change(searchInput, { target: { value: "veg" } }); // get the "e" event, event given by the browser

  fireEvent.click(searchButton);
  const cards = screen.getAllByTestId("testCards");

  expect(cards.length).toBe(1);
});
