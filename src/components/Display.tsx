import React from 'react';
import style from './Display.module.css'

type DisplayPropsType = {
    className: string
    value: number
    settingMode: boolean
    error: boolean
}

export const Display = (props: DisplayPropsType) => {
    return (
        props.settingMode
            ? <span>{props.error
                ? <span className={style.errorMessage}>incorrect values</span>
                : <span className={style.infoMessage}>enter values and press "set"</span>}</span>
            : <div className={props.className}>{props.value}</div>
    )
}