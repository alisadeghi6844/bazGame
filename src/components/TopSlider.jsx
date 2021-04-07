import React from "react";
import 'animate.css/animate.css';

const TopSlider = () => {

    return (
        <section className="top-slider">

            {/*slider1*/}
            <div id="slide1" className="slider-1 animate__fast animate__animated slider active">
                <div className="container">
                    <div className="text">
                        <h1 style={{animationDelay: "1.1s"}} className="animate__animated animate__fast">معرفی
                            بهترین <span> بازی های </span> جهان </h1>
                        <div className="paragraph">
                            <p style={{animationDelay: "0.8s"}} className="animate__animated animate__fast">تیم ما در
                                تلاش است که همواره اخبار و اطلاعات بهترین بازی های جهان را در اختیار شما دوستان
                                عزیز قرار دهد.</p>
                            <button style={{animationDelay: "0.6s"}} className="btn animate__animated animate__fast"><a
                                href="#">اطلاعات بیشتر</a></button>
                        </div>
                    </div>
                </div>
            </div>
            {/*end slider1*/}

            {/*slider2*/}
            <div id="slide2" className="slider-2 animate__fast animate__animated slider">
                <div className="container">
                    <div className="text">
                        <h1 style={{animationDelay: "1.1s"}} className="animate__animated animate__fast">معرفی
                            جدیدترین <span> بازی های </span> جهان </h1>
                        <div className="paragraph">
                            <p style={{animationDelay: "0.8s"}} className="animate__animated animate__fast">ما همواره در
                                تلاشیم که آخرین اخبار و اطلاعات صنعت گیم را در اختیار شما عاشقان دنیای بازی قرار
                                دهیم.</p>
                            <button style={{animationDelay: "0.6s"}} className="btn animate__animated animate__fast"><a
                                href="#">اطلاعات بیشتر</a></button>
                        </div>
                    </div>
                </div>
            </div>
            {/*end slider2*/}

            {/*buttons for change slider*/}
            <div className="buttons-change-slider">
                <div id="slide-one" className="active-button-slider">.01</div>
                <div id="slide-two">.02</div>
            </div>
            {/*end buttons for change slider*/}
        </section>
    );
}
export default TopSlider;