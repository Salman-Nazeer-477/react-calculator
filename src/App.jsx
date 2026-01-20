import './App.css'
import { useState, useContext, createContext } from 'react'

function Display({ result, prevExpression }) {
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

function Key({ face }) {
  const onKeyPress = useContext(ResultContext)
  return <button onClick={() => onKeyPress(face)} className="key">{face}</button>
}

function Keypad() {
  return (
    <div className="key-pad">
      <div className="key-row">
        <Key face="(" />
        <Key face=")" />
        <Key face="%" />
        <Key face="AC" />
      </div>
      <div className="key-row">
        <Key face="7" />
        <Key face="8" />
        <Key face="9" />
        <Key face="/" />
      </div>
      <div className="key-row">
        <Key face="4" />
        <Key face="5" />
        <Key face="6" />
        <Key face="*" />
      </div>
      <div className="key-row">
        <Key face="1" />
        <Key face="2" />
        <Key face="3" />
        <Key face="-" />
      </div>
      <div className="key-row">
        <Key face="0" />
        <Key face="." />
        <Key face="=" />
        <Key face="+" />
      </div>
    </div>
  )
}

const ResultContext = createContext()

function App() {
  const [result, setResult] = useState('')
  const [prevExpression, setPrevExpression] = useState('')

  function onKeyPress(face) {
    if (face === 'AC') setResult('')
    else if (face === '=') {
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
        <ResultContext.Provider value={onKeyPress}>
          <Keypad />
        </ResultContext.Provider>
      </div>
    </>
  )
}

export default App
