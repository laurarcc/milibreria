//Laura Rodríguez Castellano 2ºDAM
import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import MyFavourite from "../Myfavourite"; // importo mi componente Myfavourite custom
describe("FavCustom component", () => {
  it("El icon button se debería renderizar correctamente", () => {
    render(<MyFavourite favcolor={"info"} disabled={true} />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
