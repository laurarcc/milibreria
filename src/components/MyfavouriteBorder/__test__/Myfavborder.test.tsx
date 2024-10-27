//Laura Rodríguez Castellano 2ºDAM
import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import MyFavourite from "../MyFavouriteBorder"; // importo mi componente myfavourite border custom
describe("FavCustom component", () => {
  it("El icon button se debería renderizar correctamente", () => {
    render(<MyFavourite favcolor={"primary"} disabled={true} />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
