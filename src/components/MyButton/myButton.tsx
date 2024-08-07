'use client';

import { MyButtonProps } from "./@types";

const MyButton = ({ type, onClick, text, style }: MyButtonProps) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`bg-blue-700 text-white rounded ${style}`}
        >
            {text}
        </button>
    )
}

export default MyButton;