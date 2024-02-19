import React from "react";
import '/home/zprogrammercode/BatesTree/bates-tree/src/css/style.css';
import footerlogo from "/home/zprogrammercode/BatesTree/bates-tree/src/Assets/imageedit_1_4986758091.png";


const BtFooter = () => {



    return(
        <>
        <footer className="footer">
            <div className="footer__logo-box">
                <img src={footerlogo} alt="Full logo" className="footer__logo"/>
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <div className="footer__navigation">
                        <ul className="footer__list">
                            <li className="footer__item"><a href="/Home" className="footer__link">Company</a></li>
                            <li className="footer__item"><a href="/Contact" className="footer__link">Contact Us</a></li>
                            <li className="footer__item"><a href="/Careers" className="footer__link">Careers</a></li>
                            <li className="footer__item"><a href="/Privacy" className="footer__link">Privacy policy</a></li>
                            <li className="footer__item"><a href="/Terms" className="footer__link">Terms</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-1-of-2">
                    <p className="footer__copyright">
                        Built by <a href="zprogrammercode.com" className="footer__link">Zachary Jacobs</a> for <a href="batestreeremoval.com" className="footer__link">Bates Tree Removal</a>. Copyright &copy; Style Designs attributed by Jonas Schmedtmann collabratively available for personal and commercial use.
                    </p>
                </div>
            </div>
        </footer>
    </>
    )
}

export default BtFooter;