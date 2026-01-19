import './App.css'
import { useState } from 'react'

function Display({result, prevExpression}){
  return (
    <>
      <div className="Display">
        <div className="prev-expression">{prevExpression}</div>
        <input 
          type="text" 
          value={result}
          className="result" 
        />
      </div>
    </>
  )
}

function Key({face, onKeyPress}){
  return <button onClick={()=> onKeyPress(face)} className="key">{face}</button>
}

function Keypad({ onKeyPress }){
  return (
    <div className="key-pad">
      <div className="key-row">
        <Key onKeyPress={onKeyPress} face="(" />
        <Key onKeyPress={onKeyPress} face=")" />
        <Key onKeyPress={onKeyPress} face="%" />
        <Key onKeyPress={onKeyPress} face="AC" />
      </div>
      <div className="key-row">
        <Key onKeyPress={onKeyPress} face="7" />
        <Key onKeyPress={onKeyPress} face="8" />
        <Key onKeyPress={onKeyPress} face="9" />
        <Key onKeyPress={onKeyPress} face="/" />
      </div>
      <div className="key-row">
        <Key onKeyPress={onKeyPress} face="4" />
        <Key onKeyPress={onKeyPress} face="5" />
        <Key onKeyPress={onKeyPress} face="6" />
        <Key onKeyPress={onKeyPress} face="*" />
      </div>
      <div className="key-row">
        <Key onKeyPress={onKeyPress} face="1" />
        <Key onKeyPress={onKeyPress} face="2" />
        <Key onKeyPress={onKeyPress} face="3" />
        <Key onKeyPress={onKeyPress} face="-" />
      </div>
      <div className="key-row">
        <Key onKeyPress={onKeyPress} face="0" />
        <Key onKeyPress={onKeyPress} face="." />
        <Key onKeyPress={onKeyPress} face="=" />
        <Key onKeyPress={onKeyPress} face="+" />
      </div>
    </div>
  )
}



function App() {
  const [result, setResult] = useState('')
  const [prevExpression, setPrevExpression] = useState('')

  function onKeyPress(face){
    if(face === 'AC') setResult('')
    else if(face === '=') {
      setPrevExpression(result)
      setResult(currResult => eval(currResult))
    }
    else setResult(currResult => currResult + face)
  }
  return (
    <>
      <div className="calculator">
        <Display 
          result={result}
          prevExpression={prevExpression}
        />
        <Keypad
          onKeyPress={onKeyPress}
        />
      </div>
    </>
  )
}

export default App
