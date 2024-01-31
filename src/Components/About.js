import React from "react";
import '/home/zprogrammercode/BatesTree/bates-tree/src/css/style.css';
import '/home/zprogrammercode/BatesTree/bates-tree/src/App.css';


const AboutSection = () => {



    return(
        <>
        <section class="section-about">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                 Emergency Tree Removal and Fast Response Times
              </h2>
            </div>
              <div className="row">
                    <div className="col-1-of-2">
                        <h3 className="heading-tertiary u-margin-bottom-small">You're goring to fall in love with nature</h3>
                        <p className="paragraph">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste odio tempora inventore earum nam quaerat? Veritatis laudantium, officiis esse quibusdam natus totam quae, illo rem ipsam assumenda ipsa quasi? Sapiente.
                        </p>
                        <h3 className="heading-tertiary u-margin-bottom-small">Live adventures like you never have before</h3>
                        <p className="paragraph">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste odio tempora inventore earum nam quaerat? Veritatis laudantium, officiis esse quibusdam natus totam quae, illo rem ipsam assumenda ipsa quasi? Sapiente.
                        </p>
                        <a href="/Home" class="btn-text">Learn more &rarr;</a>
                    </div>
                    
                    <div className="col-1-of-2">
                    <div class="composition"><img src="https://res.cloudinary.com/dlnshpfdv/image/upload/v1706287541/istockphoto-172439438-612x612_hkjsab.jpg" alt="about1" className="composition__photo composition__photo--p1"/></div>
                        <div class="composition"><img src="https://res.cloudinary.com/dlnshpfdv/image/upload/v1706287550/GettyImages-1294477129-2_nbza2u.webp" alt="about2" className="composition__photo composition__photo--p2"/></div>
                        <div class="composition"><img src="https://res.cloudinary.com/dlnshpfdv/image/upload/v1706287557/83f55eb6-2e06-40b8-8dd4-032d0df50b49_dvftl0.png" alt="about3" className="composition__photo composition__photo--p3"/></div>
                    </div>
                </div>
        
    </section>
    </>
    )
}

export default AboutSection;