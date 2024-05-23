import React from "react";
import email from "../images/email.png";
import linkedin from "../images/linkedin.png";

export default function Navbar()
{
    return(
        <div>
            <button type="button" className="email" onclick="location.href = 'mailto:esko.sailakivi@edu.keuda.fi'">
                <img src={email} className="icon"/>Sähköposti</button>
                <button type="button" className="linkedin" onclick="window.location.href = 'https://www.linkedin.com'">
                <img src={linkedin} className="icon"/>LinkedIn</button>
        </div>
    )
}