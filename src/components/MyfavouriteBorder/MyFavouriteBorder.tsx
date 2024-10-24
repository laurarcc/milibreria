import { MouseEventHandler } from "react";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import IconButton from "@mui/material/IconButton";

//Declaro la interface del componente.
export interface FavBorderCustom {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  favcolor: "inherit" | "default" | "primary" | "secondary"; //prop de la clase icon que hereda el favourite icon
  disabled?: boolean; //prop disabled. Es opcional y es de tipo boolean
}

//Defino mi componente FavCustom y le digo que las props son las que definí arriba
function FavouriteBorderCustom(props: FavBorderCustom) {
  //Paso el valor de las props a un objeto:
  const { favcolor, onClick, disabled} = props;
  return (
    <IconButton
      onClick={onClick}
      disabled={disabled}
    >
      <FavoriteBorder color={favcolor} />
    </IconButton>
  );
}

export default FavouriteBorderCustom;
