import React from "react";
import Promo from "../Promo/Promo.js"
import AboutProject from "../AboutProject/AboutProject.js";
import Techs from "../Techs/Techs.js"
import AboutMe from "../AboutMe/AboutMe.js";
import Portfolio from "../Portfolio/Portfolio.js";
import Footer from "../Footer/Footer.js";
import Header from "../Header/Header.js";

function Main() {

    return(
        <>
            <Header />
            <main className="content">
                <Promo />
                <AboutProject />
                <Techs />
                <AboutMe />
                <Portfolio />
            </main>
            <Footer />
        </>
    )
};

export default Main;