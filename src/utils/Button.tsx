import React from 'react'

interface ButtonInterface {
    label: string
    type: "button" | "submit" | "reset"
    href?: string
    onClick?: () => any
    className?: string
    color: "primary" | "secondary" | "accent"
}

export const Button: React.FC<ButtonInterface> = ({ label, onClick, className, color, type }) => {
    return (
        type === "button" ?
            <button
                onClick={onClick}
                className={`${className || null} md:py-[19px] md:px-[40px] p-[12px] bg-primary text-primaryAccent rounded-[31.5px] text-[19px] leading-[22.99px] tracking-[-0.25px] font-semibold`}
            >
                {label}
            </button> : ""
    )
}