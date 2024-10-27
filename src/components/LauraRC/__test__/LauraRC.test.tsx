//Laura Rodríguez Castellano 2ºDAM
import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import MyFavourite from "../LauraRC"; // importo mi nuevo componente, que es un checkbox
describe("Mi propio componente", () => {
  it("El icon button se debería renderizar correctamente", () => {
    render(
      <MyFavourite
        disabled={true}
        checked={true}
        defaultChecked={true}
        color={"primary"}
        size={"small"}
      />,
    );
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
  });
});
