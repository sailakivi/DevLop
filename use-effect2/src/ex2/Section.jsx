import { useState, useEffect } from "react";

function Section(){
    const [time, setTime] = useState(0);

    useEffect(() => {
        console.log("Section Has Re-Rendered!");
    });

    useEffect(() => {
        const id = setInterval(() => {
            //console.log("Running Our Interval!");
            setTime((prevTime) => prevTime + 1);
        }, 1000);

        return () => clearInterval(id);
    }, []);


    return <h1>Time On Page: {time} seconds(s)</h1>;
}

export default Section;