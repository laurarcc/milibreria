//Laura Rodríguez Castellano 2ºDAM
import { MouseEventHandler } from "react";
import Checkbox from "@mui/material/Checkbox";

//Declaro la interface del componente.
export interface LauraRCustom {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean; //prop disabled. Es opcional y es de tipo boolean
  checked?: boolean; //prop checked. Permite controlador el estado del checkbox
  defaultChecked?: boolean; //prop para controlar el estado inicial
  color?: "primary" | "secondary" | "error" | "default"; //prop para colorear el checkbox
  size?: "small" | "medium"; //tamaño del checkbox
}

//Defino mi componente LauraRc y le digo que las props son las que definí arriba
function LauraRc(props: LauraRCustom) {
  //Paso el valor de las props a un objeto:
  const { onClick, disabled, checked,
    defaultChecked, size, color } = props;
  return (
    <Checkbox
      onClick={onClick}
      disabled={disabled}
      checked={checked}
      defaultChecked={defaultChecked}
      color={color}
      size={size}
    ></Checkbox>
  );
}

export default LauraRc;
