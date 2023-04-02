import './App.css';
import Button from "./Button"
import Screen from "./Screen"
import React, { useState } from "react"

function App() {
  const [currentNumber, setCurrentNumber] = useState("0")

  const [mathSymbol, setMathSymbol]
  = useState("")

  const [prevNumber, setPrevNumber]
  = useState("")

  const [useOnceButtons, setUseOnceButtons]
  = useState({
    decimalUsed: false,
    divideUsed: false,
    timesUsed: false,
    minusUsed: false,
    plusUsed: true,
    equalsUsed: false
  })
  
  function displayClickedNumber(num) {
    if (num == "AC") {
      setCurrentNumber("0")
      setPrevNumber("")
      setMathSymbol("")
      setUseOnceButtons(oldUseOnceButtons => ({
        ...oldUseOnceButtons,
        decimalUsed: false,
        plusUsed: true
      }))
    }
    else if (num == "÷"|num == "x"|num == "-"|num == "+" && mathSymbol == "") {
      setMathSymbol(num)
      setPrevNumber(currentNumber)
      setCurrentNumber("0")
      setUseOnceButtons(oldUseOnceButtons => ({
        ...oldUseOnceButtons,
        decimalUsed: false,
        plusUsed: true
      }))
    }
    else if (num == "÷"|num == "x"|num == "-"|num == "+" && mathSymbol == "÷") {
      setPrevNumber(oldPrevNumber => Number(oldPrevNumber) / Number(currentNumber))
      setMathSymbol(num)
      setCurrentNumber("0")
      setUseOnceButtons(oldUseOnceButtons => ({
        ...oldUseOnceButtons,
        decimalUsed: false
      }))
    }
    else if (num == "÷"|num == "x"|num == "-"|num == "+" && mathSymbol == "x") {
      setPrevNumber(oldPrevNumber => Number(oldPrevNumber) * Number(currentNumber))
      setMathSymbol(num)
      setCurrentNumber("0")
      setUseOnceButtons(oldUseOnceButtons => ({
        ...oldUseOnceButtons,
        decimalUsed: false
      }))
    }
    else if (num == "÷"|num == "x"|num == "-"|num == "+" && mathSymbol == "-") {
      setPrevNumber(oldPrevNumber => Number(oldPrevNumber) - Number(currentNumber))
      setMathSymbol(num)
      setCurrentNumber("0")
      setUseOnceButtons(oldUseOnceButtons => ({
        ...oldUseOnceButtons,
        decimalUsed: false
      }))
    }
    else if (num == "÷"|num == "x"|num == "-"|num == "+" && mathSymbol == "+") {
      setPrevNumber(oldPrevNumber => Number(oldPrevNumber) + Number(currentNumber))
      setMathSymbol(num)
      setCurrentNumber("0")
      setUseOnceButtons(oldUseOnceButtons => ({
        ...oldUseOnceButtons,
        decimalUsed: false
      }))
    }
    else if 
    (currentNumber == "0" && num !== "." && num !== "BACK" && num !=="=" && num !== "+/-") {
      setCurrentNumber(num)
    }
    else if (currentNumber == "0" && num == "+/-") {
      setCurrentNumber("-")
    }
    //////////////// test
    else if (num == "." && (currentNumber.toString().includes(".") == true)) {
      console.log("activated")
      return
    }
    //////////////////////// test
    else if (num == "." && useOnceButtons.decimalUsed == false) {
      setCurrentNumber(oldCurrentNumber => oldCurrentNumber.toString() + num.toString())
      setUseOnceButtons(oldUseOnceButtons => ({
        ...oldUseOnceButtons,
        decimalUsed: true
      }))
    }
    else if (num == "." && useOnceButtons.decimalUsed == true) {
      setCurrentNumber(currentNumber)
    }
    else if(num == "BACK" && currentNumber.length > 1) {
      setCurrentNumber(oldCurrentNumber => oldCurrentNumber.slice(0,-1))
      
    }
    else if (num == "BACK" ) {
      setCurrentNumber("0")
    }
    else if (num == "BACK" && currentNumber == "0") {
      setCurrentNumber("0")
    }
    else if
    (num == "=" && mathSymbol =="÷") {
      setCurrentNumber(oldCurrentNumber => (Number(prevNumber) / Number(oldCurrentNumber)))
      setPrevNumber("")
      setMathSymbol("")
    }
    else if
    (num == "=" && mathSymbol =="x") {
      setCurrentNumber(oldCurrentNumber => (Number(prevNumber) * Number(oldCurrentNumber)))
      setPrevNumber("")
      setMathSymbol("")
    }
    else if
    (num == "=" && mathSymbol == "-") {
      setCurrentNumber(oldCurrentNumber => (Number(prevNumber) - Number(oldCurrentNumber)))
      setPrevNumber("")
      setMathSymbol("")
    }
    else if
    (num == "=" && mathSymbol == "+") {
      setCurrentNumber(oldCurrentNumber => (Number(prevNumber) + Number(oldCurrentNumber)))
      setPrevNumber("")
      setMathSymbol("")
    }
    else if (num == "=") {
      setCurrentNumber(oldCurrentNumber => oldCurrentNumber)
    }
    else if (num =="+/-") {
      setCurrentNumber(oldCurrentNumber => -(oldCurrentNumber))
    }
    else if (num == "1"|num == "2"|num == "3"|num == "4"|num == "5"|num == "6"|num == "7"|num == "8"|num == "9"|num == "0"|num == "."){
    setCurrentNumber(oldCurrentNumber => oldCurrentNumber.toString() + num.toString())
  }
}

  return (
    <div className="calculator">
      <Screen 
      currentNumber={currentNumber}
      mathSymbol={mathSymbol}
      prevNumber={prevNumber}
      />
      <div className="calc-buttons-container">
      <Button 
      className="AC" 
      value="AC"
      displayClickedNumber={() => displayClickedNumber("AC")}/>
      <Button 
      className="BACK" 
      value="BACK" 
      displayClickedNumber={() => displayClickedNumber("BACK")}/>
      <Button 
      className="divide ; symbol-button" value="÷"
      displayClickedNumber={() => displayClickedNumber("÷")}/>
      <Button 
      className="seven ; number-button" value="7"
      displayClickedNumber={() => displayClickedNumber(7)}/>
      <Button 
      className="eight ; number-button" value="8"
      displayClickedNumber={() => displayClickedNumber(8)}/>
      <Button 
      className="nine ; number-button" value="9"
      displayClickedNumber={() => displayClickedNumber(9)}/>
      <Button 
      className="x ; symbol-button" value="x"
      displayClickedNumber={() => displayClickedNumber("x")}/>
      <Button 
      className="four ; number-button" value="4"
      displayClickedNumber={() => displayClickedNumber(4)}/>
      <Button 
      className="five ; number-button" value="5"
      displayClickedNumber={() => displayClickedNumber(5)}/>
      <Button 
      className="six ; number-button" value="6"
      displayClickedNumber={() => displayClickedNumber(6)}/>
      <Button 
      className="minus ; symbol-button" value="-"
      displayClickedNumber={() => displayClickedNumber("-")}/>
      <Button 
      className="one ; number-button" value="1"
      displayClickedNumber={() => displayClickedNumber(1)}/>
      <Button 
      className="two ; number-button" value="2"
      displayClickedNumber={() => displayClickedNumber(2)}/>
      <Button 
      className="three ; number-button" value="3"
      displayClickedNumber={() => displayClickedNumber(3)}/>
      <Button 
      className="plus ; symbol-button" value="+"
      displayClickedNumber={() => displayClickedNumber("+")}/>
      <Button 
      className="zero ; number-button" value="0"
      displayClickedNumber={() => displayClickedNumber(0)}/>
      <Button 
      className="decimal ; number-button" value="."
      displayClickedNumber={() => displayClickedNumber(".")}/>
      <Button 
      className="positive-negative ; number-button" value="+/-"
      displayClickedNumber={() => displayClickedNumber("+/-")}/>
      <Button 
      className="equals"
      value="="
      displayClickedNumber={() => displayClickedNumber("=")}/>
      </div>
    </div>
  );
}

export default App;


