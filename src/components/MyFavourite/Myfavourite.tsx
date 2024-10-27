//Laura Rodríguez Castellano 2ºDAM
import { MouseEventHandler } from "react";
import FavouriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";

//Declaro la interface del componente del icono "me gusta".
export interface FavCustom {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  favcolor:
    | "inherit"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"; //prop de la clase icon que hereda el favourite icon
  disabled?: boolean; //prop disabled. Es opcional y es de tipo boolean
}

//Defino mi componente FavCustom y le digo que las props son las que definí arriba
function FavouriteCustom(props: FavCustom) {
  //Paso el valor de las props a un objeto:
  const { favcolor, onClick, disabled } = props;
  return (
    <IconButton onClick={onClick} disabled={disabled}>
      <FavouriteIcon color={favcolor} />
    </IconButton>
  );
}

export default FavouriteCustom;
