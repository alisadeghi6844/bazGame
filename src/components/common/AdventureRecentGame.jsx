import React from "react";

const AdventureRecentGame = () => {
    return (
        <div>
            <section className="new-recent-game">
                <div className="title">
                    <h2>بازی های اخیر</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="box box1">
                            <div className="open-img">
                                <div className="type open">Open world</div>
                            </div>
                            <div className="text">
                                <h5>Red Dead Redemption 2</h5>
                                <p>با آرتور، داچ و سایر شخصیت‌های بازی همراه شده و یکی از بهترین داستان‌های روایت شده در
                                    غرب وحشی را تجربه کنید.
                                </p>
                                <div className="star">
                                    <div className="box-img st">
                                        <img src="images/home-site/star-min.png" className="img-fluid" alt="رای"/>
                                    </div>
                                </div>
                                <div className="heart">
                                    <div className="box-img he">
                                        <img src="images/home-site/heart-min.png" className="img-fluid" alt="پسندیدن"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="box box2">
                            <div className="open-img">
                                <div className="type open">Open world</div>
                            </div>
                            <div className="text">
                                <h5>Assassin’s Creed Odyssey</h5>
                                <p>داستان این بازی مخاطب را به یونان باستان برده و به او امکان انتخاب از بین دو شخصیت،
                                    کاساندرا یا الکسیوس، را می‌دهد.</p>

                                <div className="star">
                                    <div className="box-img st">
                                        <img src="images/home-site/star-min.png" className="img-fluid" alt="رای"/>
                                    </div>
                                </div>
                                <div className="heart">
                                    <div className="box-img he">
                                        <img src="images/home-site/heart-min.png" className="img-fluid" alt="پسندیدن"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="box box3">
                            <div className="open-img">
                                <div className="type open">Open world</div>
                            </div>
                            <div className="text">
                                <h5>Far Cry 5</h5>
                                <p>داستان این بازی حول فرقه‌ی آخرالزمانی‌ خشن و افسار گسیخته‌ای می‌چرخد. برخلاف بازی‌های پیشین سری....</p>

                                <div className="star">
                                    <div className="box-img st">
                                        <img src="images/home-site/star-min.png" className="img-fluid" alt="رای"/>
                                    </div>
                                </div>
                                <div className="heart">
                                    <div className="box-img he">
                                        <img src="images/home-site/heart-min.png" className="img-fluid" alt="پسندیدن"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default AdventureRecentGame;