import React from 'react';
import Result from './components/Result';
import MathOperations from './components/MathOperations';
import Numbers from './components/Numbers';
import Functions from './components/Functions';
// import Button from './components/Button';

import './App.css';

//generacion de la func del comp
const App = () => {
    
    // const clickHandlerFunction = text => console.log('button.Handler', text)

    return (
        <main className="react-calculator">
            <Result value={2}/>
            <Numbers onClickNumber={number => console.log('Number ',number)} />
            <Functions 
                onContentClear={() => console.log('Content clear')}
                onDelete={() => console.log('onDelete')}
            />
            <MathOperations 
                onClickOperarion={operation => console.log('operation: ',operation)} 
                onClickEqual={equal => console.log('equal ', equal)}
            />
        </main>
    )
}

export default App;
//exportacion