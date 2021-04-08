import React from "react";

const NewRecentGame = () => {
    return (
        <section className="new-recent-game">
            <div className="title">
                <h2>بازی های اخیر</h2>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="box box1">
                        <div className="img">
                            <div className="type new">NEW</div>
                        </div>
                        <div className="text">
                            <h5>Call of Duty: Black Ops Cold War</h5>
                            <p>استودیو اکتیویژن بازی ندای وظیفه: جنگ سرد بلک اپس را به صورت انحصاری در بتلنت و به صورت
                                آنلاین منتشر کرده است
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
                    <div className="box box2">
                        <div className="img">
                            <div className="type new">NEW</div>
                        </div>
                        <div className="text">
                            <h5>Assassin’s Creed Valhalla</h5>
                            <p>داستان بازی در۸۷۳ میلادی و در زمان حملات وایکینگ‌ها به بریتانیا اتفاق می‌افتد. داستان و
                                بسیاری از اتفاقات بازی در سرزمین‌های
                                ....</p>

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
                        <div className="img">
                            <div className="type new">NEW</div>
                        </div>
                        <div className="text">
                            <h5>Cyberpunk 2077</h5>
                            <p>آینده‌ی بشری یکی از جنجال‌برانگیزترین بحث‌هایی است که هرروز میان اقشار مختلفی دنبال
                                می‌شود. فیلم‌های هالیوودی همگی
                                ....</p>

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
    );
}
export default NewRecentGame;