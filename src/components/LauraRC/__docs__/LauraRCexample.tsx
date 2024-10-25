import React from "react";

import LauraRc, { LauraRCustom } from "../LauraRC";

function LauraRCexample(props: LauraRCustom) {
  return (
    <LauraRc
      onClick={props.onClick}
      disabled={props.disabled}
    />
  );
}

export default LauraRCexample;
