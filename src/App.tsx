import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Button} from './components/Button';
import {Display} from './components/Display';

function App() {
    const [value, setValue] = useState(Number(localStorage.getItem('value')) || 0)
    const [startValue, setStartValue] = useState(Number(localStorage.getItem('startValue')) || 0)
    const [maxValue, setMaxValue] = useState(Number(localStorage.getItem('maxValue')) || 5)
    const [settingMode, setSettingMode] = useState(localStorage.getItem('settingMode') === null
        ? true
        : localStorage.getItem('settingMode') === 'true'
    )

    const increment = () => {
        if (value < maxValue) {
            setValue(value + 1)
        }
    }

    const reset = () => {
        setValue(0)
    }

    useEffect(() => {
        localStorage.setItem('value', JSON.stringify(value))
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('settingMode', JSON.stringify(settingMode))
    }, [value, startValue, maxValue, settingMode])

    const setValues = () => {
        if (startValue < maxValue) {
            setSettingMode(false)
            setValue(startValue)
        }
    }

    const onMaxValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value)
    }

    const onStartValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(+e.currentTarget.value)
    }

    const activeSettingMode = () => {
        setSettingMode(true)
    }

    return (
        <div className="App">
            {
                settingMode
                    ? <div className={'container'}>
                        <div>
                            <span>max value: </span>
                            <input type="number"
                                   value={maxValue}
                                   className={startValue >= maxValue || startValue < 0 || maxValue < 0 ? 'inputError' : ''}
                                   onFocus={() => setSettingMode(true)}
                                   onChange={onMaxValueChangeHandler}
                            />
                        </div>
                        <div>
                            <span>start value: </span>
                            <input type="number"
                                   value={startValue}
                                   className={startValue >= maxValue || startValue < 0 || maxValue < 0 ? 'inputError' : ''}
                                   onFocus={() => setSettingMode(true)}
                                   onChange={onStartValueChangeHandler}
                            />
                        </div>

                        <Button className={'button'}
                                onClick={setValues}
                                name={'set'}
                                disabled={!settingMode || startValue >= maxValue || startValue < 0 || maxValue < 0}/>
                    </div>
                    : <div className={'container'}>
                        <Display className={`value ${value === maxValue ? 'maxValue' : ''}`}
                                 value={value}
                                 settingMode={settingMode}
                                 error={startValue >= maxValue}
                        />

                        <div className={'buttons'}>
                            <Button className={'button'} onClick={increment} name={'inc'}
                                    disabled={settingMode || value === maxValue}/>
                            <Button className={'button'} onClick={reset} name={'reset'}
                                    disabled={settingMode || value === 0}/>
                        </div>
                        <Button className={'button'} onClick={activeSettingMode} name={'set'}/>
                    </div>
            }
        </div>
    );
}

export default App;
