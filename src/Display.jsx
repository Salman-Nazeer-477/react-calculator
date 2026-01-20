export default function Display({ result, prevExpression }) {
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