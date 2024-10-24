import { MouseEventHandler } from "react";
import FavouriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";

//Declaro la interface del componente.
export interface FavCustom {
  onClick?: MouseEventHandler<HTMLButtonElement>;//prop onClick opcional y responde al
  favcolor:
    | "inherit"
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"; //prop de la clase icon que hereda el favourite icon
}

//Defino mi componente FavCustom y le digo que las props son las que definí arriba
function FavouriteCustom(props: FavCustom) {
  //Paso el valor de las props a un objeto:
  const { favcolor, onClick } = props;
  return (
    <IconButton>
      <FavouriteIcon onClick={onClick} sx={{ color: favcolor }}></FavouriteIcon>
    </IconButton>
  );
}

export default FavouriteCustom;
