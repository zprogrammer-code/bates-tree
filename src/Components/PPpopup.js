import React from "react";
import companyLogo from "/home/zprogrammercode/BatesTree/bates-tree/src/Assets/imageedit_2_6105021654.png";

import"/home/zprogrammercode/BatesTree/bates-tree/src/css/style.css";






const EmailPopup = () => {


    return(
        <>
              <div className="popup" id="privacy">
            <div className="popup__content">
                <div className="popup__left">
                    <img src={companyLogo} alt="Email popup" className="popup__img"/>

                </div>
                <div className="popup__right">
                    <a href="#section-services" className="popup__close">&times;</a>
                    <h2 className="heading-secondary u-margin-bottom-small">Start Booking Now</h2>
                    <h3 className="heading-tertiary u-margin-bottom-small">Important &ndash; Please read these terms before booking</h3>
                    <p className="popup__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac placerat vestibulum lectus mauris ultrices eros in. A lacus vestibulum sed arcu non odio euismod lacinia at. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Erat nam at lectus urna duis convallis convallis tellus. Nisi scelerisque eu ultrices vitae. Purus in mollis nunc sed id semper. Congue eu consequat ac felis donec et odio. Diam donec adipiscing tristique risus nec feugiat. 
                    </p>
                    <a href="/home" className="btn btn--green">Book Now</a>
                </div>
            </div>
        </div>
        </>
    )
}

export default EmailPopup;