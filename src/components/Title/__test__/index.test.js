import { render, screen } from "@testing-library/react";
import Title from "..";
import storeApi from "../../../utils/storeApi";
import "@testing-library/jest-dom/extend-expect";

let wrapper;
let updateListTitle;
let deleteList;

beforeEach(() => {
  updateListTitle = jest.fn();
  deleteList = jest.fn();

  wrapper = ({ children }) => (
    <storeApi.Provider
      value={{
        updateListTitle,
        deleteList,
      }}
    >
      {children}
    </storeApi.Provider>
  );
});

test("Title component should render the title", () => {
  render(<Title title={"Random Title"} listId={"1234"} />, { wrapper });

  expect(screen.getByRole("heading")).toHaveTextContent("Random Title");
});
