import {
  fireEvent,
  render,
  waitFor,
  screen,
} from "@testing-library/react";
import { MainPage } from "./MainPage";

test("Renders Main Page", async () => {
  const { getByTestId } = render(<MainPage />);
  const mainComponent = getByTestId("MainPage");

  expect(mainComponent).toBeVisible();
});
test("Render Loading Component", async () => {
  const { getByTestId } = render(<MainPage />);
  const mainComponent = getByTestId("MainPage");
  const loadingComponent = mainComponent.querySelector(
    '[data-testid="loading-container"]'
  );

  await waitFor(() => {
    expect(loadingComponent).toBeInTheDocument();
  });
});
test("Render Dropdown Component", async () => {
  const { getByTestId } = render(<MainPage />);
  const mainComponent = getByTestId("MainPage");
  const dropdownComponent = mainComponent.querySelector(
    '[data-testid="dropdown"]'
  );

  expect(dropdownComponent).toBeInTheDocument();
});

test("Render Date Input Component", async () => {
  const { getByTestId } = render(<MainPage />);
  const mainComponent = getByTestId("MainPage");

  fireEvent.click(screen.getByText("Filter"));
  fireEvent.click(screen.getByText("by Date"));

  const dateInputComponent = mainComponent.querySelector(
    '[data-testid="dateInput"]'
  );

  expect(dateInputComponent).toBeInTheDocument();
});

test("Render Text Input Component", async () => {
  const { getByTestId } = render(<MainPage />);
  const mainComponent = getByTestId("MainPage");

  fireEvent.click(screen.getByText("Filter"));
  fireEvent.click(screen.getByText("by Name"));

  const textInputComponent = mainComponent.querySelector(
    '[data-testid="textInput"]'
  );

  expect(textInputComponent).toBeInTheDocument();
});
test("Render BarChart Component", async () => {
  const { getByTestId } = render(<MainPage />);
  const mainComponent = getByTestId("MainPage");
  const loadingComponent = mainComponent.querySelector(
    '[data-testid="loading-container"]'
  );

  await waitFor(() => expect(loadingComponent).toBeInTheDocument());

  expect(getByTestId('barChart')).toBeInTheDocument();
});
test("Render PieChart Component", async () => {
  const { getByTestId } = render(<MainPage />);
  const mainComponent = getByTestId("MainPage");
  const loadingComponent = mainComponent.querySelector(
    '[data-testid="loading-container"]'
  );

  await waitFor(() => expect(loadingComponent).toBeInTheDocument());

  expect(getByTestId('pieChart')).toBeInTheDocument();
});
