import React from "react";
import video from "/home/zprogrammercode/BatesTree/bates-tree/src/Assets/IMG_2947.mp4";
import "/home/zprogrammercode/BatesTree/bates-tree/src/css/style.css";

const ReviewSection = () => {



    return(
        <>
         <section className="section-reviews">
                <div className="bg-video">
                    <video className="bg-video__content" autoPlay muted loop >
                        <source src={video} type="video/mp4"/>
                        Your browser is not supported
                    </video>
                </div>
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        We Appreciate and Value our Customers
                     </h2>
                </div>

                <div className="row">
                    <div className="review">
                        <figure className="review__shape">
                            <figcaption className="review__caption">Mary Smith</figcaption>
                        </figure>
                        <div className="review__text">
                            <h3 className="heading-tertiary u-margin-bottom-small">
                                Troy and Marcey Responded and Completed job in a single week
                            </h3>
                            <p>
                             consectetur adipisicing elit. Iste odio tempora inventore earum nam quaerat? Veritatis laudantium, officiis esse quibusdam natus totam quae, illo rem ipsam assumenda ipsa quasi? Sapiente.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="review">
                        <figure className="review__shape">
                            <figcaption className="review__caption">George Jacobs</figcaption>
                        </figure>
                        <div className="review__text">
                            <h3 className="heading-tertiary u-margin-bottom-small">
                                Troy and Marcey Responded and Completed job in a single week
                            </h3>
                            <p>
                             consectetur adipisicing elit. Iste odio tempora inventore earum nam quaerat? Veritatis laudantium, officiis esse quibusdam natus totam quae, illo rem ipsam assumenda ipsa quasi? Sapiente.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="u-center-text u-margin-top-big">
                    <a href="/Reviews" className="btn-text">Read all reviews &rarr;</a>
                </div>
            </section>
        </>
    )
}

export default ReviewSection;

/*  <img src="src/Assets/nat-8.jpg" alt="person on a tour" className="review__img"></img>
    <img src="src/Assets/nat-9.jpg" alt="person on a tour" className="review__img"></img>
*/
