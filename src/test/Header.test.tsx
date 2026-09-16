import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Header from "../components/Header";

describe("Header", () => {
  it("renders utan problem", () => {
    render(<Header />);

    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("visar huvudrubrik", () => {
    render(<Header />);
    expect(
      screen.getByRole("heading", { name: "Task-Board" }),
    ).toBeInTheDocument();
  });

  it("visar beskrivning", () => {
    render(<Header />);
    expect(
      screen.getByText("Ett enkelt task-board byggd med react och TypeScript"),
    ).toBeInTheDocument();
  });
});
