//Laura Rodríguez Castellano 2ºDAM
import React from "react";
//importamos nuestro componente FavCustom y sus props
import FavouriteCustom, { FavCustom } from "../Myfavourite";
//Creamos un componente Example al cual le pasaremos las props definidas
//en nuestro componente FavCustom. Luego renderizamos nuestro componente
//<FavCustom /> con esas props. La idea es que llamemos al componente Example
//con valores de las props para renderizar el componente <FavCustom /> de diferentes
//maneras, es decir, crear una historia de renderizados de nuestro componente.
function FavExample(props: FavCustom) {
  return (
    <FavouriteCustom
      favcolor={props.favcolor}
      onClick={props.onClick}
      disabled={props.disabled}
    />
  );
}

export default FavExample;
