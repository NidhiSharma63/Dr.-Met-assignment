import { render, screen } from "@testing-library/react";
import ChevronIcon from "./ChevronIcon";

// Test to check if the ChevronLeftOutlinedIcon is rendered
test("renders ChevronLeftOutlinedIcon when drawerWidth is 300", () => {
  const handleClick = jest.fn(); // Mock function for the click handler
  render(<ChevronIcon handleClickOnChveronIcon={handleClick} drawerWidth={300} />);

  // Check if the ChevronLeftOutlinedIcon is in the document
  const leftIcon = screen.getByTestId("ChevronLeftOutlinedIcon");

  expect(leftIcon).toBeInTheDocument();
});

// Test to check if the ChevronRightOutlinedIcon is rendered
test("renders ChevronRightOutlinedIcon when drawerWidth is not 300", () => {
  const handleClick = jest.fn(); // Mock function for the click handler
  render(<ChevronIcon handleClickOnChveronIcon={handleClick} drawerWidth={0} />);

  // Check if the ChevronRightOutlinedIcon is in the document
  const rightIcon = screen.getByTestId("ChevronRightOutlinedIcon");
  expect(rightIcon).toBeInTheDocument();
});
