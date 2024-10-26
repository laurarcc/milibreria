import { MouseEventHandler } from 'react';
export interface LauraRCustom {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    checked?: boolean;
    defaultChecked?: boolean;
    color?: "primary" | "secondary" | "error" | "default";
    size?: "small" | "medium";
}
declare function LauraRc(props: LauraRCustom): import("react/jsx-runtime").JSX.Element;
export default LauraRc;
