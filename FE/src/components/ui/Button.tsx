import { ReactElement } from "react"

export interface ButtonProps {
    variant: Variants,
    size: "sm" | "md" | "lg",
    text: string,
    startIcon?: ReactElement,
    endIcon?: ReactElement,
    onClick: () => void,
}

type Variants = "primary" | "secondary"

const variantStyles = {
    "primary" : "bg-purple-600 text-white",
    "secondary" : "bg-purple-300 text-purple-600"
}

const sizeStyles = {
    "sm": "py-1 px-2",
    "md": "py-2 px-4",
    "lg": "py-4 px-6" 
}

const defaultStyles = "rounded-md p-4 flex"

export const Button = (props: ButtonProps) => {
    return (
        <button className={`${sizeStyles[props.size]} ${variantStyles[props.variant]} ${defaultStyles}`}>
            {props.startIcon ? <div className="pr-2">{props.startIcon}</div> :  null} {props.text} {props.endIcon}</button>
    )
}
