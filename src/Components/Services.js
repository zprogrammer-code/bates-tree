import React from "react";
import "/home/zprogrammercode/BatesTree/bates-tree/src/css/style.css";



const  ServiceCards = () => {


    return(
        <>
        <section className="section-services">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                       Most popular services
                    </h2>
                </div>

                <div className="row">
                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture--1">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--1">
                                        Tree Removal
                                    </span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li className="li">Arborist Equipment</li>
                                        <li className="li">Safety and Property Protection measures</li>
                                        <li className="li">Labor and clean up</li>
                                        <li className="li">Transport Vehicle and Trailer</li>
                                        <li className="li">Disposing Material</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-1">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <p className="card__price-only">Avg</p>
                                        <p className="card__price-value">$650</p>
                                    </div>
                                    <a href="/Home" className="btn btn--white">Book now!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture--2">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--2">
                                        Fire Wood Delivery
                                    </span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li className="li">Processing Equipment</li>
                                        <li className="li">Safety and Quality Garuntee</li>
                                        <li className="li">Loading and Unload</li>
                                        <li className="li">Transport Vehicle and Trailer</li>
                                        <li className="li">Dry Wood</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-2">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <p className="card__price-only">Avg</p>
                                        <p className="card__price-value">$250/CORT</p>
                                    </div>
                                    <a href="/Home" className="btn btn--white">Order!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture--3">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--3">
                                        HOA and Package Deals
                                    </span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li className="li">Neighborhoods or Multiple</li>
                                        <li className="li">Safety and Property Protection measures</li>
                                        <li className="li">Labor and clean up</li>
                                        <li className="li">Transport Vehicle and Trailer</li>
                                        <li className="li">Disposing Material</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-3">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <p className="card__price-only">Avg</p>
                                        <p className="card__price-value">$1200+</p>
                                    </div>
                                    <a href="/Home" className="btn btn--white">Get Estimate!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="u-center-text u-margin-top-big">
                    <a href="/Quote" className="btn btn--green">Recieve a Customized Bid</a>
                </div>
            </section>
        </>

    )
}

export default ServiceCards;