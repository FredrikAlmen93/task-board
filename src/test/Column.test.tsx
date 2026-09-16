import { render, screen } from "@testing-library/react";
import Column from "../components/Column";
import { describe, it, expect } from "vitest";

describe("Column", () => {
  it("visar sin titel", () => {
    render(
      <Column title="To-Do">
        <p>En testuppgift</p>
      </Column>,
    );
    expect(screen.getByRole("heading", { name: "To-Do" })).toBeInTheDocument();
  });

  it("visar sina children", () => {
    render(
      <Column title="To-Do">
        <p>En testuppgift</p>
      </Column>,
    );
    expect(screen.getByText("En testuppgift")).toBeInTheDocument();
  });
});
