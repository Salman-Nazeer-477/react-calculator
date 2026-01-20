import './App.css'
import { useState} from 'react'
import { ResultContext } from './Context'
import Display from './Display'
import Keypad from './Keypad'



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
