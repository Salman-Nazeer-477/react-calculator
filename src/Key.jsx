import { useContext } from 'react'
import { ResultContext } from './Context'

export default function Key({ face }) {
  const onKeyPress = useContext(ResultContext)
  return <button onClick={() => onKeyPress(face)} className="key">{face}</button>
}