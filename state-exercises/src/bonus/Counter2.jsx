import { useState } from "react";

function Counter2(){
    const [count, setCount] = useState(0)

    function handleClick(){

        setCount((prevCount) => prevCount + 1);
        setCount((prevCount) => prevCount + 1);
    }

    return(
        <>
            <h1>{count}</h1>
            <button onClick={handleClick}>+</button>  
        </>
    );
}

export default Counter2;