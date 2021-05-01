import React from 'react';
import "./styleFooter.css";
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <footer id="footer">
            <section className="footer-box">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 order-xl-1 order-2 col-md-6">
                            <div className="box best-comments">
                                <div className="title">
                                    <h4>برترین نظرات</h4>
                                </div>
                                <div className="comments">
                                    <ul>
                                        <li>
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <div className="img img1"/>
                                                </div>

                                                <div className="col-sm-9">
                                                    <div className="text">
                                                        <p><span className="name-person"> Ali Sadeghi </span> کامنتی را
                                                            در این سایت به
                                                            اشتراک گذاشته است
                                                        </p>
                                                        <p className="date-comment">June 21, 2021</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <div className="img img2"/>
                                                </div>

                                                <div className="col-sm-9">
                                                    <div className="text">
                                                        <p><span className="name-person"> Mohammad </span> کامنتی را
                                                            در این سایت به
                                                            اشتراک گذاشته است
                                                        </p>
                                                        <p className="date-comment">June 21, 2021</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <div className="img img3"/>
                                                </div>

                                                <div className="col-sm-9">
                                                    <div className="text">
                                                        <p><span className="name-person"> gamer </span> کامنتی را
                                                            در این سایت به
                                                            اشتراک گذاشته است
                                                        </p>
                                                        <p className="date-comment">June 21, 2021</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <div className="img img4"/>
                                                </div>

                                                <div className="col-sm-9">
                                                    <div className="text">
                                                        <p><span className="name-person"> wolf </span> کامنتی را
                                                            در این سایت به
                                                            اشتراک گذاشته است
                                                        </p>
                                                        <p className="date-comment">June 21, 2021</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 order-xl-2 order-3 col-md-6">
                            <div className="box latest-post">
                                <div className="title">
                                    <h4>تازه ترین پست ها</h4>
                                </div>
                                <div className="comments">
                                    <ul>
                                        <li>
                                            <div className="row">
                                                <div className="col-sm-4">
                                                    <div className="img img1"/>
                                                </div>

                                                <div className="col-sm-8">
                                                    <div className="text">
                                                        <p className="date-comment">June 21, 2021</p>
                                                        <p>بازی PUBG به‌صورت رویال بتل است و شما در بازی با 100 تن دیگر
                                                            ...
                                                        </p>
                                                        <span className="admin">By Admin</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="row">
                                                <div className="col-sm-4">
                                                    <div className="img img2"/>
                                                </div>

                                                <div className="col-sm-8">
                                                    <div className="text">
                                                        <p className="date-comment">June 21, 2021</p>
                                                        <p>یکی از بزرگترین بازی های چند نفره آنلاین در جهان می باشد
                                                            که....
                                                        </p>
                                                        <span className="admin">By Admin</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="row">
                                                <div className="col-sm-4">
                                                    <div className="img img3"/>
                                                </div>

                                                <div className="col-sm-8">
                                                    <div className="text">
                                                        <p className="date-comment">June 21, 2021</p>
                                                        <p>یکی از قابلیت های جالب بازی کنترل هر شخصیت به صورت تک نفره می
                                                            باشد...
                                                        </p>
                                                        <span className="admin">By Admin</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 order-xl-3 order-1 col-md-12">
                            <div className="logo-box">
                                <div className="img-logo"/>
                                <p className="text-logo">تیم ما در تلاش است که همواره اخبار و اطلاعات به روز دنیای بازی
                                    را در اختیار شما دوستاران
                                    بازی قرار دهد.</p>
                                <div className="img-animate"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="nav-bottom-site">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <nav className="nav-bottom">
                                <ul className="nav">
                                    <li className="nav-item">
                                        <ul className="nav">
                                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                            <li className="nav-item"><NavLink to="/" activeClassName="active-page" exact
                                                                              className="nav-link">خانه</NavLink></li>
                                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                            <li className="nav-item"><NavLink to="/games" activeClassName="active-page"
                                                                              className="nav-link">بازی ها</NavLink>
                                            </li>
                                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                            <li className="nav-item"><NavLink to="blog" activeClassName="active-page"
                                                                              className="nav-link">وبلاگ</NavLink></li>
                                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                            <li className="nav-item"><NavLink to="forums" activeClassName="active-page"
                                                                              className="nav-link">انجمن ها</NavLink>
                                            </li>
                                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                            <li className="nav-item"><NavLink to="content" activeClassName="active-page"
                                                                              className="nav-link">ارتباط با
                                                ما</NavLink></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-6">
                            <div className="text">
                                <p>تمامی حقوق این سایت متعلق به شرکت <span><a
                                    href="https://www.bazgame.ir"> bazgame </a></span> می باشد و هرگونه کپی برداری از آن
                                    غیر
                                    قانونی است.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
