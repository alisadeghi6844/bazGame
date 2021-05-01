import React from 'react';

const RecentReviews = () => {
    return (
        <section className="recent-reviews">
            <div className="container">
                <div className="title">
                    <span>New</span>
                    <h2>نقدهای اخیر</h2>
                </div>
                <div className="boxes">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="box box1">
                                <div className="img"/>
                                <div className="text">
                                    <h5>Assasin’’s Creed Origins</h5>
                                    <p>در بازی Assassins Creed Origins ما در نقش شخصیتی به نام بایک قرار خواهیم گرفت که
                                        ....</p>
                                </div>
                                <div className="rate-game game1">
                                    9.3
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="box box2">
                                <div className="img"/>
                                <div className="text">
                                    <h5>Doom</h5>
                                    <p>در بازی Doom Eternal قرار است که سلاح‌های جدیدی را هم تجربه کنیم. یکی از این
                                        سلاح‌ها....</p>
                                </div>
                                <div className="rate-game game2">
                                    9.5
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="box box3">
                                <div className="img"/>
                                <div className="text">
                                    <h5>Overwatch</h5>
                                    <p>گیم پلی بازی یکی از نقاط قوت اساسی‌اش است، بلیزارد در این عنوان نیز بیشتر تمرکز
                                        خود را بر روی گیم پلی بازی گذاشته است....</p>
                                </div>
                                <div className="rate-game game3">
                                    9.1
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="box box4">
                                <div className="img"/>
                                <div className="text">
                                    <h5>GTAV</h5>
                                    <p>یکی از قابلیت های جالب بازی کنترل هر شخصیت به صورت تک نفره می باشد که درحین
                                        ماموریت یا خارج از ماموریت بین آنها سوئیچ کنید....</p>
                                </div>
                                <div className="rate-game game4">
                                    9.7
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecentReviews;
