import Key from './Key'

export default function Keypad() {
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