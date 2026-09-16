import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TaskCard from "../components/TaskCard";

describe("TaskCard", () => {
  it("visar information från props", () => {
    render(
      <TaskCard
        title="Testa TaskCard"
        id={1}
        description="Detta är en testuppgift"
        assignee="Fredrik"
        category="Testkategori"
        prioritet="Hög"
      />,
    );

    expect(screen.getByText("Testa TaskCard")).toBeInTheDocument();
    expect(screen.getByText("Detta är en testuppgift")).toBeInTheDocument();
    expect(screen.getByText("Ansvarig: Fredrik")).toBeInTheDocument();
    expect(screen.getByText("Testkategori")).toBeInTheDocument();
    expect(screen.getByText("Prioritet: Hög")).toBeInTheDocument();
  });
});
