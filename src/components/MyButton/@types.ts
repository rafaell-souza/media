export type MyButtonProps = {
    type?: "button" | "submit" | "reset";
    onClick: () => void;
    text: string;
    style?: string;
}