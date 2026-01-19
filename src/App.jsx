import './App.css'

function Display({result, previousExpression}){
  return (
    <>
      <div className="Display">
        <div className="prev-expression">{previousExpression}</div>
        <input 
          type="text" 
          value={result}
          className="result" 
        />
      </div>
    </>
  )
}

function Key({face}){
  return <button className="key">{face}</button>
}

function Keypad(){
  return (
    <>
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
    </>
  )
}

function App() {

  return (
    <>
      <div className="calculator">
        <Display />
        <Keypad />
      </div>
    </>
  )
}

export default App
