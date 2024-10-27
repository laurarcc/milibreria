//Laura Rodríguez Castellano 2ºDAM
import { MouseEventHandler } from "react";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import IconButton from "@mui/material/IconButton";

//Declaro la interface del componente para hacer el borde del icono "me gusta"
export interface FavBorderCustom {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  favcolor:
    | "inherit"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"; //prop para asignar los colores al icono "me gusta"

  disabled?: boolean; //prop disabled. Es opcional y es de tipo boolean
}

//Defino mi componente FavBorderCustom y le digo que las props son las que definí arriba
function FavouriteBorderCustom(props: FavBorderCustom) {
  //Paso el valor de las props a un objeto:
  const { favcolor, onClick, disabled } = props;
  return (
    <IconButton onClick={onClick} disabled={disabled}>
      <FavoriteBorder color={favcolor} />
    </IconButton>
  );
}

export default FavouriteBorderCustom;
