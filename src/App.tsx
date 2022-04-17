import React, {useState} from 'react';
import './App.css';
import {Button} from './components/Button';
import {Display} from './components/Display';

function App() {
    const [value, setValue] = useState(0)
    const MAX_VALUE = 5

    const increment = () => {
        if (value < MAX_VALUE) {
            setValue(value + 1)
        }
    }
    const reset = () => {
        setValue(0)
    }

    const setToLocalStorageHandler = () => {
        localStorage.setItem('count', JSON.stringify(value))
        localStorage.setItem('count2', JSON.stringify(value))
    }
    const getFromLocalStorageHandler = () => {
        const value = localStorage.getItem('count')

        if (value) {
            setValue(JSON.parse(value))
        }
    }

    const clearLocalStorageHandler = () => {
        localStorage.clear()
    }

    const removeLocalStorageHandler = () => {
        localStorage.removeItem('count2')
    }
    return (
        <div className="App">
            <div className={'counter'}>

                <Display className={`value ${value === MAX_VALUE ? 'maxValue' : ''}`} value={value}/>

                <div className={'buttons'}>
                    <Button className={'button'} onClick={increment} name={'inc'} disabled={value === MAX_VALUE}/>
                    <Button className={'button'} onClick={reset} name={'reset'} disabled={value === 0}/>
                    <button onClick={setToLocalStorageHandler}>setToLocalStorage</button>
                    <button onClick={getFromLocalStorageHandler}>getFromLocalStorage</button>
                    <button onClick={clearLocalStorageHandler}>clearLocalStorageHandler</button>
                    <button onClick={removeLocalStorageHandler}>removeLocalStorageHandler</button>
                </div>
            </div>
        </div>
    );
}

export default App;
