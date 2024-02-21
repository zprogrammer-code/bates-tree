import React from "react";
import "/home/zprogrammercode/BatesTree/bates-tree/src/css/style.css";


const BurgerMenu = () => {


    return(
        <>
          <div class="navigation">
            <input type="checkbox" class="navigation__checkbox" id="navi-toggle"/>

            <label for="navi-toggle" class="navigation__button">
                <span class="navigation__icon">&nbsp;</span>
            </label>
              
            <div class="navigation__background">&nbsp;</div>

            <nav class="navigation__nav">
                <ul class="navigation__list">
                    <li class="navigation__item"><a href="#" class="navigation__link"><span>01</span>About Bates Tree Removal</a></li>
                    <li class="navigation__item"><a href="#" class="navigation__link"><span>02</span>Pricing</a></li>
                    <li class="navigation__item"><a href="#" class="navigation__link"><span>03</span>Blog</a></li>
                    <li class="navigation__item"><a href="#" class="navigation__link"><span>04</span>Reviews</a></li>
                    <li class="navigation__item"><a href="#" class="navigation__link"><span>05</span>Book Now</a></li>
                </ul>
            </nav>
        </div>
        </>
    )
}

export default BurgerMenu;