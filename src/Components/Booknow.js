import React from "react";
import '/home/zprogrammercode/BatesTree/bates-tree/src/css/style.css';

const BookNow = () => {



    return(
        <>
<section className="section-book">
                <div className="row">
                    <div className="book">
                        <div className="book__form">
                            <form action="#" className="form">
                                <div className="u-margin-bottom-medium">
                                    <h2 className="heading-secondary">
                                        Start Booking now
                                     </h2>
                                </div>

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
            </section>
    </>
    )
}

export default BookNow;