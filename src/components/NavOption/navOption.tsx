"use client"

import { NavOptionProps } from "./@types";

const NavOption = ({ children, text, style }: NavOptionProps) => {
    return (
        <div className={style}>
            <div className="text-2xl">
                {children}
            </div>
            <p className="ml-5">{text}</p>
        </div>
    )
}

export default NavOption;