import React from "react";

const RacingRecentGame = () => {
    return (
        <div>
            <section className="new-recent-game">
                <div className="title">
                    <h2>بازی های اخیر</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="box box1">
                            <div className="racing-img">
                                <div className="type racing">RACING</div>
                            </div>
                            <div className="text">
                                <h5>Forza Horizon 4</h5>
                                <p>یکی از مشهورترین سری بازی‌های Racing آرکید است که توسط Playground Games توسعه داده
                                    شده است....</p>
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
                    <div className="col-lg-4 col-md-6">
                        <div className="box box2">
                            <div className="racing-img">
                                <div className="type racing">RACING</div>
                            </div>
                            <div className="text">
                                <h5>Assetto Corsa</h5>
                                <p>جزییات آنقدر مو به مو و درست در این بازی شبیه‌ساز رعایت شده که کافی است تا با یک ست
                                    فرمان بازی را آغاز کنید
                                    و....</p>

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
                    <div className="col-lg-4 col-md-6">
                        <div className="box box3">
                            <div className="racing-img">
                                <div className="type racing">RACING</div>
                            </div>
                            <div className="text">
                                <h5>Project Cars 2</h5>
                                <p>از عرضه Project Cars 2 نزدیک به ۳ سال می‌گذرد اما همچنان این سری یکی از بهترین
                                    بازی‌های شبیه‌سازی است
                                    و....</p>

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
export default RacingRecentGame;