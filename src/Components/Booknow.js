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
                            </form>
                        </div>
                    </div>
                </div>
            </section>
    </>
    )
}

export default BookNow;