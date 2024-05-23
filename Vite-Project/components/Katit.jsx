import kissa1 from "../images/whiskerson.png";
import kissa2 from "../images/fluffy.png";
import kissa3 from "../images/felix.png";
import kissa4 from "../images/pumpkin.png";

function Katit() {
    return(
        <div className="contacts">
            <div className="contact-card">
                <img src={kissa1} alt="Mr. Whiskerson" />
                <h3>Mr. Whiskerson</h3>
                <div className="info-group">
                <img src="../images/phone-icon.png" />
                <p>(212) 555-1234</p>
                </div>
                <div className="info-group">
                <img src="../images/email-icon.png" alt="" />
                <p>mr.whiskaz@catnap.meow</p>
                </div>
            </div>
        </div>

    );
}