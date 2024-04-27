import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { useAppContext } from "../../Provider/AppProvider";
import SwitchComponent from "./SwitchComponent";

// Mock the useAppContext hook
jest.mock("../../Provider/AppProvider", () => ({
  useAppContext: jest.fn(),
}));

describe("SwitchComponent", () => {
  it("should enable dark mode when switch is toggled on", () => {
    const setDarkThemeEnabled = jest.fn();
    useAppContext.mockImplementation(() => ({
      setDarkThemeEnabled,
    }));

    render(<SwitchComponent />);

    // Find the switch and click it (assuming defaultChecked is true and we click to toggle off)
    const switchButton = screen.getByRole("checkbox");
    fireEvent.click(switchButton); // Toggles off

    // Expect setDarkThemeEnabled to have been called with false
    expect(setDarkThemeEnabled).toHaveBeenCalledWith(false);

    // Click again to toggle on
    fireEvent.click(switchButton);
    // Expect setDarkThemeEnabled to have been called with true
    expect(setDarkThemeEnabled).toHaveBeenCalledWith(true);
  });

  it("should handle initial state correctly", () => {
    const setDarkThemeEnabled = jest.fn();
    useAppContext.mockImplementation(() => ({
      setDarkThemeEnabled,
    }));

    render(<SwitchComponent />);
    // The initial defaultChecked is true, check if setDarkThemeEnabled is called correctly on initial render
    const switchButton = screen.getByRole("checkbox");
    expect(switchButton).toBeChecked(); // Verifies that the switch starts in the checked state
  });
});
