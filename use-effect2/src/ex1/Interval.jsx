import { useState, useEffect } from "react";

function Interval(){
    const [count, setCount] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            console.log("Interval Says Hello!");
        }, 1000);

        return () => cleanInterval(id);
    }, []);

    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Go Up!</button>
        </>
    );
}

export default Interval;