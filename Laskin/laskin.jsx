import React from "react";

export default function Laskin(){
    const[count, setCount] = React.useState(0);

    function add(){
        setCount(count + 1);
    }
    function subtract() {
        setCount(count - 1)
    }

    return(
       <div className = "counter">
        <button className = "counter --minus" onClick = {subtract}>-</button>
        <div className = "counter--count">
            <h1>{count}</h1>
        </div>
            <button claaName = "counter--plus" onClick = {add}>
                +
            </button>
       </div>
    );
}