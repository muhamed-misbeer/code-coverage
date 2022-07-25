/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent } from "@testing-library/react";
import App from './App';

test("input label", () => {
  const { getByText } = render(<App />);
  const Namelabel = getByText(/Name/i)
  const Agelabel = getByText(/Age/i)
  expect(Namelabel).toBeInTheDocument();
  expect(Agelabel).toBeInTheDocument();
})

test("should be able to type name input field", () => {
  const { getByTestId } = render(<App />);

  fireEvent.change(getByTestId("name"), { target: { value: "" } });
  expect(getByTestId("name").value).toBe("");
})

test("should be able to type age input field", () => {
  const { getByTestId } = render(<App />);
  fireEvent.change(getByTestId("age"), { target: { value: "" } });
  expect(getByTestId("age").value).toBe('')
})

test("error message", () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId("paragraph").textContent).toBe("");
})

test("submit button", () => {
  const { getByTestId } = render(<App />);
  fireEvent.click(getByTestId('button'))
})