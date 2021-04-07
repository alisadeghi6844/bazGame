import React from "react";

const IntroducingGames = () => {
    return (
        <section className="intro-games">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 game game1">
                        <span className="type">RACING</span>
                        <div className="text">
                            <h5><a href="#">Forza Horizon 4</a></h5>
                            <p>یکی از مشهورترین سری بازی‌های Racing آرکید است که توسط Playground Games توسعه داده شده
                                است....</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 game game2">
                        <span className="type">NEW</span>
                        <div className="text">
                            <h5><a href="#">PlayerUnknown’s Battlegrounds</a></h5>
                            <p>بازی PUBG به‌صورت رویال بتل است و شما در بازی با 100 تن دیگر از بازیکنان به یک جزیره
                                فرستاده
                                می‌شوید....</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 game game3">
                        <span className="type">STRATEGY</span>
                        <div className="text">
                            <h5><a href="#">Yaiba Ninja Gaiden</a></h5>
                            <p>نینجا زخمی و خونین به زمین افتاده است. او فقط به فکر گرفتن انتقام خویش است و می داند که
                                در حال مرگ است ....</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 game game4">
                        <span className="type">NEW</span>
                        <div className="text">
                            <h5><a href="#">World Of Warcraft</a></h5>
                            <p>یکی از بزرگترین بازی های چند نفره آنلاین در جهان می باشد که برای اولین بار در سال 2004
                                منتشر شد....</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default IntroducingGames;