import React from "react";
import "/home/zprogrammercode/BatesTree/bates-tree/src/css/style.css";
import '/home/zprogrammercode/BatesTree/bates-tree/src/App.css';



const  ServiceCards = () => {


    return(
        <>
        <section class="section-services">
                <div class="u-center-text u-margin-bottom-big">
                    <h2 class="heading-secondary">
                       Most popular services
                    </h2>
                </div>

                <div class="row">
                    <div class="col-1-of-3">
                        <div class="card">
                            <div class="card__side card__side--front">
                                <div class="card__picture card__picture--1">
                                    &nbsp;
                                </div>
                                <h4 class="card__heading">
                                    <span class="card__heading-span card__heading-span--1">
                                        Tree Removal
                                    </span>
                                </h4>
                                <div class="card__details">
                                    <ul>
                                        <li class="li">Arborist Equipment</li>
                                        <li class="li">Safety and Property Protection measures</li>
                                        <li class="li">Labor and clean up</li>
                                        <li class="li">Transport Vehicle and Trailer</li>
                                        <li class="li">Disposing Material</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="card__side card__side--back card__side--back-1">
                                <div class="card__cta">
                                    <div class="card__price-box">
                                        <p class="card__price-only">Avg</p>
                                        <p class="card__price-value">$650</p>
                                    </div>
                                    <a href="/Home" class="btn btn--white">Book now!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-1-of-3">
                        <div class="card">
                            <div class="card__side card__side--front">
                                <div class="card__picture card__picture--2">
                                    &nbsp;
                                </div>
                                <h4 class="card__heading">
                                    <span class="card__heading-span card__heading-span--2">
                                        Fire Wood Delivery
                                    </span>
                                </h4>
                                <div class="card__details">
                                    <ul>
                                        <li class="li">Processing Equipment</li>
                                        <li class="li">Safety and Quality Garuntee</li>
                                        <li class="li">Loading and Unload</li>
                                        <li class="li">Transport Vehicle and Trailer</li>
                                        <li class="li">Dry Wood</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="card__side card__side--back card__side--back-2">
                                <div class="card__cta">
                                    <div class="card__price-box">
                                        <p class="card__price-only">Avg</p>
                                        <p class="card__price-value">$250/CORT</p>
                                    </div>
                                    <a href="/Home" class="btn btn--white">Order!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-1-of-3">
                        <div class="card">
                            <div class="card__side card__side--front">
                                <div class="card__picture card__picture--3">
                                    &nbsp;
                                </div>
                                <h4 class="card__heading">
                                    <span class="card__heading-span card__heading-span--3">
                                        HOA and Package Deals
                                    </span>
                                </h4>
                                <div class="card__details">
                                    <ul>
                                        <li class="li">Neighborhoods or Multiple</li>
                                        <li class="li">Safety and Property Protection measures</li>
                                        <li class="li">Labor and clean up</li>
                                        <li class="li">Transport Vehicle and Trailer</li>
                                        <li class="li">Disposing Material</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="card__side card__side--back card__side--back-3">
                                <div class="card__cta">
                                    <div class="card__price-box">
                                        <p class="card__price-only">Avg</p>
                                        <p class="card__price-value">$1200+</p>
                                    </div>
                                    <a href="/Home" class="btn btn--white">Get Estimate!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="u-center-text u-margin-top-big">
                    <a href="/Quote" class="btn btn--green">Recieve a Customized Bid</a>
                </div>
            </section>
        </>

    )
}

export default ServiceCards;