import { MouseEventHandler } from 'react';
export interface FavBorderCustom {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    favcolor: "inherit" | "primary" | "secondary" | "error" | "info" | "success" | "warning";
    disabled?: boolean;
}
declare function FavouriteBorderCustom(props: FavBorderCustom): import("react/jsx-runtime").JSX.Element;
export default FavouriteBorderCustom;
