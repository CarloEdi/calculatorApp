function Screen(props) {
    return (
        <div className="screen-container">
          <h3 className="previous-number">{props.prevNumber}</h3>
          <div className="number-symbol-container">
            <h3 className="math-symbol">{props.mathSymbol}</h3>
            <h1 className="current-number">{props.currentNumber}</h1>
          </div>
        </div>
    )
}
export default Screen