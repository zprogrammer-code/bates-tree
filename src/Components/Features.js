import React from "react";
import "/home/zprogrammercode/BatesTree/bates-tree/src/App.css";

const FeatureSection = () => {


    return(
        <>
               <section className="section-features">
                <div className="row2">
                    <div className="col-1-of-4">
                        <div className="feature-box">
                        <svg 
                        className="feature-box__icon" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 640 512"
                        fill="green"
                        width="32" height="62">
                            <path d="M480 0c-17.7 0-32 14.3-32 32V192 512h64V192H624c8.8 0 16-7.2 16-16V48c0-8.8-7.2-16-16-16H512c0-17.7-14.3-32-32-32zM416 159L276.8 39.7c-12-10.3-29.7-10.3-41.7 0l-224 192C1 240.4-2.7 254.5 2 267.1S18.6 288 32 288H64V480c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V384c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v96c0 17.7 14.3 32 32 32h64.7l.2 0h-1V159z"/></svg>
                            <h3 className="heading-tertiary u-margin-bottom-small">Emergency Services/ Property value preservation</h3>
                            <p className="feature-box__text">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste odio tempora inventore earum nam.
                            </p>
                        </div>
                    </div>

                    <div class="col-1-of-4">
                        <div class="feature-box">
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 640 512"
                        fill="green"
                        width="32" height="62"><path d="M112 0C85.5 0 64 21.5 64 48V96H16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 272c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 48c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 240c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 208c8.8 0 16 7.2 16 16s-7.2 16-16 16H64V416c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H112zM544 237.3V256H416V160h50.7L544 237.3zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"/></svg>                            
                            <h3 class="heading-tertiary u-margin-bottom-small">Hauling</h3>
                            <p class="feature-box__text">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste odio tempora inventore earum nam quaerat? Veritatis laudantium, officiis esse qui Sapiente.
                            </p>
                        </div>
                    </div>

                    <div class="col-1-of-4">
                        <div class="feature-box">
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 448 512"
                        fill="green"
                        width="32" height="62"><path d="M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z"/></svg>                            
                            <h3 class="heading-tertiary u-margin-bottom-small">Fire wood in bulk</h3>
                            <p class="feature-box__text">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste odio tempora inventore earum nam quaerat? Veritatis laudantium,ejfnkjegfrg.
                            </p>
                        </div>
                    </div>

                    <div class="col-1-of-4">
                        <div class="feature-box">
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 640 512"
                        fill="green"
                        width="32" height="62"
                        ><path d="M288 48c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48V192h40V120c0-13.3 10.7-24 24-24s24 10.7 24 24v72h24c26.5 0 48 21.5 48 48V464c0 26.5-21.5 48-48 48H432 336c-26.5 0-48-21.5-48-48V48zm64 32v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16zm16 80c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H368zM352 272v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16zm176-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H528zM512 368v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H528c-8.8 0-16 7.2-16 16zM224 160c0 6-1 11-2 16c20 14 34 38 34 64c0 45-36 80-80 80H160V480c0 18-15 32-32 32c-18 0-32-14-32-32V320H80c-45 0-80-35-80-80c0-26 13-50 33-64c-1-5-1-10-1-16c0-53 42-96 96-96c53 0 96 43 96 96z"/></svg>                            
                            <h3 class="heading-tertiary u-margin-bottom-small">Tree Removal/Arborist Services</h3>
                            <p class="feature-box__text">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste odio tempora inventore earum nam quaerat? 
                            </p>
                        </div>
                    </div>

                 

                    
                </div>
            </section>
        </>
    )
}

export default FeatureSection;

/*  <i class="feature-box__icon material-icons" id="gf">language</i> */
