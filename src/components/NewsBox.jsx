import React from "react";

const NewsBox = () => {
    return (
        <section className="news-box">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-8 text">
                        <div className="text-update">
                            <p><span className="text">بازی Forza Horizon 4 توسط HOODLUM  کرک شد .  <span
                                className="racing">racing</span></span> <span className="text">بازی Assassin’s Creed Valhalla توسط هکر EMPRESS کرک شد .  <span
                                className="action">action</span></span>
                                <span className="text">عنوان جدید بازی کالاف دیوتی در مورد جنگ جهانی دوم می باشد . <span
                                    className="new">new</span></span>
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-4 title">
                        <div className="bigHeading">آخرین اخبار دنیای بازی</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default NewsBox;