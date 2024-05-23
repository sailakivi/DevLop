import "../src/style.css";
import kissa1 from "../images/whiskerson.png";
import kissa2 from "../images/fluffy.png";
import kissa3 from "../images/felix.png";
import kissa4 from "../images/pumpkin.png";

function Kisut(){
    return(
        <div className="contacts">
            <img src="{kissa1}" />
            <h3>Mr. Whiskerson</h3>
            <div>
                <img src="../images/phone-icon.png" />
                <p>(212) 555-1234</p>
            </div>
            <div className="info-group">
            <img src="./images/mail-icon.png"/>
            <p>mr.whiskaz@catnap.meow</p>
            </div>
        </div>     
    );
}