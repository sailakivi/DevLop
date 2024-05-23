import { useEffect, useRef, useState } from "react";

function GuessNumber(){

    const randomNumber = useRef(null);
    const inputRef = useRef(null);
    const [pText, setPText] = useState("")

    function handleGuess() {

        let { value: InputGuess } = inputRef.current;
        inputGuess = Number(inputGuess);
        const random = randomNumber.current;

        if (inputGuess === random){
            console.log("You Win!");
            setPText("You Win!")
        } else if(inputGuess < random){
            console.log("You Guessed Too Low!");
            setPText("You Guessed Too Low!")
        } else{
            console.log("You Guessed Too High!");
            setPText("You Guessed Too High!")
        }
    }

    useEffect(() => {

        randomNumber.current = Math.floor(Math.random() * 10);
        console.log(randomNumber);
    }, []);

    return(
        <>
            <input type="text" ref={inputRef} />
            <button onClick={handleGuess}>Guess!</button>
            <p>{pText}</p>
        </>
    )
}

export default GuessNumber;