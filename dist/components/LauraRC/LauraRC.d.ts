import { MouseEventHandler } from 'react';
export interface LauraRCustom {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
}
declare function LauraRc(props: LauraRCustom): import("react/jsx-runtime").JSX.Element;
export default LauraRc;
