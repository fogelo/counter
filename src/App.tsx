import React, {useState} from 'react';
import './App.css';

function App() {
    const [value, setValue] = useState(0)
    const increment = () => {
        setValue(value + 1)
    }
    const reset = () => {
        setValue(0)
    }
    return (
        <div className="App">
            <div className={'counter'}>
                <div className={'value'}>{value}</div>
                <div className={'buttons'}>
                    <button className={'button'} onClick={increment}>inc</button>
                    <button className={'button'} onClick={reset}>reset</button>
                </div>
            </div>
        </div>
    );
}

export default App;
