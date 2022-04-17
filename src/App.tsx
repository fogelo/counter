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
    return (
        <div className="App">
            <div className={'counter'}>

                <Display className={`value ${value === MAX_VALUE ? 'maxValue' : ''}`} value={value}/>

                <div className={'buttons'}>
                    <Button className={'button'} onClick={increment} name={'inc'} disabled={value === MAX_VALUE}/>
                    <Button className={'button'} onClick={reset} name={'reset'} disabled={value === 0}/>
                </div>
            </div>
        </div>
    );
}

export default App;
