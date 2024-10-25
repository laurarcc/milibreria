import { MouseEventHandler } from "react";
import Checkbox from "@mui/material/Checkbox";

//Declaro la interface del componente.
export interface LauraRCustom {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean; //prop disabled. Es opcional y es de tipo boolean
}

//Defino mi componente FavCustom y le digo que las props son las que definí arriba
function LauraRc(props: LauraRCustom) {
  //Paso el valor de las props a un objeto:
  const { onClick, disabled } = props;
  return (
    <Checkbox onClick={onClick} disabled={disabled}></Checkbox>
  );
}

export default LauraRc;
