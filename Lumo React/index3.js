import ReactDOM from "react-dom/client";

const page = (
    <div>

        <h1>React Harjoitus</h1>
        <h3>React</h3>
        <ol>
            <li>Koostuu Komponenteista</li>
            <li>On Kuvaileva</li>
            <li>Reacti Mahdollistaa Työnsaannin</li>
            <li>Koodarit Ylläpitää</li>
        </ol>

    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(page);


