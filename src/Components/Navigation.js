import React from "react";
import "/home/zprogrammercode/BatesTree/bates-tree/src/css/style.css";


const BurgerMenu = () => {


    return(
        <>
          <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>

            <label htmlFor="navi-toggle" className="navigation__button">
                <span class="navigation__icon">&nbsp;</span>
            </label>
              
            <div className="navigation__background">&nbsp;</div>

            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item"><a href="/About" class="navigation__link"><span>01</span>About Bates Tree Removal</a></li>
                    <li className="navigation__item"><a href="#popup" class="navigation__link"><span>02</span>Pricing</a></li>
                    <li className="navigation__item"><a href="/Blog" class="navigation__link"><span>03</span>Blog</a></li>
                    <li className="navigation__item"><a href="/Reviews" class="navigation__link"><span>04</span>Reviews</a></li>
                    <li className="navigation__item"><a href="/Contact" class="navigation__link"><span>05</span>Contact</a></li>
                </ul>
            </nav>
        </div>
        </>
    )
}

export default BurgerMenu;