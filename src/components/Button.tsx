type ButtonPropsType = {
    className: string
    onClick: () => void
    name: string
    disabled: boolean
}

export const Button = (props: ButtonPropsType) => {
    return (
        <>
            <button className={props.className}
                    onClick={props.onClick}
                    disabled={props.disabled}
            >
                {props.name}
            </button>
        </>
    )
}