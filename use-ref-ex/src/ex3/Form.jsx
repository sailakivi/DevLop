import { useRef, useState } from "react";

function Form() {
    const formRef = useRef(null);
    const [pText, setPText] = useState("");

    function submitForm(e){
        e.preventDefault();
        const formData = new FormData(formRef.current)
        let paraText = "";

        for (const [name, value] of formData){
            paraText += `[${name}]: ${value}`
        }

        setPText(paraText);
    }

    return (
        <>
            <form ref={formRef} onSubmit={submitForm}>
                <input type="text" name="name" placeholder="name" />
                <input type="email" name="email" placeholder="kikkelis@kokkelis.com" />
                <input type="number" name="age" placeholder="33" />

                <button type="submit">Submit</button>

            </form>
            <p>{}</p>
        </>
    );
}

export default Form;