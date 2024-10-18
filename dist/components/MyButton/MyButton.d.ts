import { MouseEventHandler } from 'react';
export interface ButtonCustomProps {
    text: string;
    txtcolor: string;
    bgcolor: string;
    size?: "small" | "medium" | "large";
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    borderColor: string;
    borderWidth?: "small" | "medium" | "large";
    hoverTxtColor: string;
    hoverColor: string;
}
declare function MyButton(props: ButtonCustomProps): import("react/jsx-runtime").JSX.Element;
export default MyButton;
