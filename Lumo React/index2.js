import ReactDOM from "react-dom/client";

const navbar = (

    <nav>
        <h1>Eskon Sivu</h1>
        <ul>

            <li>Hinnasto</li>
            <li>Meistä</li>
            <li>Ota Yhteyttä</li>

        </ul>      
    </nav>

);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(navbar);