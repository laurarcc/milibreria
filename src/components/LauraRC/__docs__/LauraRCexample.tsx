import React from "react";

import LauraRc, { LauraRCustom } from "../LauraRC";

function LauraRCexample(props: LauraRCustom) {
  return (
    <LauraRc
      onClick={props.onClick}
      disabled={props.disabled}
      checked={props.checked}
      defaultChecked={props.defaultChecked}
      color={props.color}
      size={props.size}
    />
  );
}

export default LauraRCexample;
