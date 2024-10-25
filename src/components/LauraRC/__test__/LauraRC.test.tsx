import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import MyFavourite from "../LauraRC"; // importo mi componente myfavourite border custom
describe("Mi propio componente", () => {
  it("El icon button se debería renderizar correctamente", () => {
    render(<MyFavourite disabled={true} />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
  });
});
