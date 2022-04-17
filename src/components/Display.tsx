import React from 'react';

type DisplayPropsType = {
    className: string
    value: number
}

export const Display = (props: DisplayPropsType) => {
    return (
        <>
            <div className={props.className}>
                {props.value}
            </div>
        </>
    )
}