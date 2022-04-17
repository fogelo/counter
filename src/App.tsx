import React, {useState} from 'react';
import './App.css';

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
                <div className={`value ${value === MAX_VALUE ? 'maxValue' : ''}`}>{value}</div>
                <div className={'buttons'}>
                    <button className={'button'}
                            onClick={increment}
                            disabled={value === MAX_VALUE}
                    >
                        inc
                    </button>
                    <button className={'button'}
                            onClick={reset}
                            disabled={value === 0}
                    >
                        reset
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
