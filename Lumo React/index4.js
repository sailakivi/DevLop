import ReactDOM from "react-dom/client";

function Ylatunniste(){
    return (

    <div>
        <img src="./logo192.png" width="40px" className="logo" alt="react-logo"  />
        
        <ul className="nav">
            <li>Koti</li>
            <li>Meistä</li>
            <li>Ota Yhteyttä</li>
        </ul> 
    </div>

    );
}        

function Paasisalto(){
    return (

        <div>
        <h1>Tietoa Reactista</h1>

        <ul className="Tietoa">
            <li>Julkaistiin ensimmäisen kerran 2013.</li>
            <li>Alunperin Jordan Walken Luoma.</li>
            <li>Reactilla on yli 100K tähteä Gitissä.</li>
            <li>On Facebookin ylläpitämä.</li>
            <li>Toimii moottorina tuhansille ohjelmille, myös mobiilisoftille.</li>
        </ul>     
    </div>

    );
}

function Alatunniste(){
    return(

        <div>
        <small className="footer">
            &copy; Esko Säiläkivi 2024.
        </small>
        </div>

    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>
        <Ylatunniste></Ylatunniste>
        <Paasisalto></Paasisalto>
        <Alatunniste></Alatunniste>
    </div>
);