import { MouseEventHandler } from 'react';
export interface FavCustom {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    favcolor: "inherit" | "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning";
    disabled?: boolean;
}
declare function FavouriteCustom(props: FavCustom): import("react/jsx-runtime").JSX.Element;
export default FavouriteCustom;
