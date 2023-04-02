 function Button(props) {
    return (
          <button 
          className={props.className}
          onClick={props.displayClickedNumber}
          >
          {props.value}  
          </button>
          
        
    )
 }
 export default Button

