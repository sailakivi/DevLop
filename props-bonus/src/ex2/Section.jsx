import Button from "./Button.jsx";
import Header from "./Header.jsx";


function Section(){

    function Banana(){
        console.log("Boo!");
    }

    return(
        <>
            <Header text="Exercise 2" />
            <Button text="Click Me!" handleClick={Banana} />
        </>
    )
}

export default Section;