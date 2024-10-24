import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import MyFavourite from "../MyFavourite"; // importo mi componente CustomButton
describe("FavCustom component", () => {
  it("El botón se debería renderizar correctamente", () => {
    render(
      <MyFavourite
        favcolor={'info'}
      />,
    );
    const favouiteicon = screen.getByRole("favouriteicon");
    expect(favouiteicon).toBeInTheDocument();
  });
});
