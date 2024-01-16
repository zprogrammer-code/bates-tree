import React from "react";
import "/home/zprogrammercode/BatesTree/bates-tree/src/App.css";



const BtHero = () => {


    return(
        <div className="herosection">
            <div className="logo-box">
                <img src="https://res.cloudinary.com/dlnshpfdv/image/upload/v1705379694/imageedit_2_6105021654_lfac0c.png" alt="logo" className="logo"></img>
            </div>
            <div className="text-box">
                <h1 className="heading">
                    <span className="primary-heading">Supplying Firewood, Ensuring Safety, Anytime, Anywhere</span>
                    <span className="sub-heading">Safety in Storms, Warmth in Winter: Bates Tree Removal Does It All.</span>
                </h1>
                <a href="/Home" className="btn btn-white btn-animated">Get a quote</a>
            </div>
        </div>

    )
}

export default BtHero;

/*        <Image src="https://ogden_images.s3.amazonaws.com/www.iamcountryside.com/images/sites/1/2019/03/19084309/AdobeStock_228778938-scaled-e1683315426520.jpeg" fluid/>
*/