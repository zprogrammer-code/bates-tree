import React from "react";
import companyLogo from "/home/zprogrammercode/BatesTree/bates-tree/src/Assets/imageedit_2_6105021654.png";

import"/home/zprogrammercode/BatesTree/bates-tree/src/css/style.css";






const EmailPopup = () => {


    return(
        <>
              <div className="popup" id="popup">
            <div className="popup__content">
                <div className="popup__left">
                    <img src={companyLogo} alt="Email popup" className="popup__img"/>

                </div>
                <div className="popup__right">
                    <a href="#section-services" className="popup__close">&times;</a>
                    <h2 className="heading-secondary u-margin-bottom-small">Start Booking Now</h2>
                    <h3 className="heading-tertiary u-margin-bottom-medium">Important &ndash; Please read these terms before booking <a href="#terms" className="popup__terms">Terms & Conditions</a> </h3>
                    
                    <div className="row">
                   
                            <form action="#" className="form">
                              

                                <div className="form__group">
                                    <input type="text" id="name" className="form__input" placeholder="Full Name" required/>
                                    <label htmlFor="name" className="form__label">Full Name</label>
                                </div>

                                <div className="form__group">
                                    <input type="email" className="form__input" placeholder="Email Address" required/>
                                    <label htmlFor="email" className="form__label">Email Address</label>
                                </div>

                                <div className="form__group u-margin-bottom-medium">

                                    <div className="form__radio-group">
                                        <input type="radio" className="form__radio-input" id="small" name="size"/>
                                        <label htmlFor="small" className="form__radio-label">
                                            <span class="form__radio-button"></span>
                                            Arborist Services
                                        </label>
                                    </div>

                                    <div class="form__radio-group">
                                        <input type="radio" className="form__radio-input" id="large" name="size"/>
                                        <label htmlFor="large" className="form__radio-label">
                                            <span class="form__radio-button"></span>
                                            FireWood Delivery
                                        </label>
                                    </div>

                                </div>

                                <div className="form__group">
                                    <button className="btn btn--green">Next Step &rarr;</button>
                                </div>
                            </form>
                    
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default EmailPopup;