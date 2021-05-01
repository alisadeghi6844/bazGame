import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header id="header">
            <section className="header-box">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-3 button-box">
                            <div className="button">
                                <button className="btn btn-for-login"><NavLink to="/login" activeStyle={{color:"#fff"}}> ورود </NavLink> / <NavLink to="/register" activeStyle={{color:"#fff"}}> عضویت </NavLink></button>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7 col-md-7 col-6 nav-box">
                            <nav className="nav-top-menu">
                                <ul className="nav">
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <li className="nav-item"><NavLink to="/" activeClassName="active-page" exact className="nav-link">خانه</NavLink></li>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <li className="nav-item"><NavLink to="/games" activeClassName="active-page"  className="nav-link">بازی ها</NavLink></li>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <li className="nav-item"><NavLink to="blog" activeClassName="active-page" className="nav-link">وبلاگ</NavLink></li>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <li className="nav-item"><NavLink to="forums" activeClassName="active-page" className="nav-link">انجمن ها</NavLink></li>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <li className="nav-item"><NavLink to="content" activeClassName="active-page" className="nav-link">ارتباط با ما</NavLink></li>
                                </ul>
                            </nav>

                            {/*burger*/}
                            <div className="burger" id="burger-button">
                                <div className="burger-menu">
                                    <span/><span/><span/>
                                </div>
                            </div>
                            {/*end burger*/}

                            {/*nav burger*/}
                            <nav className="nav-top-slide-menu">
                                <ul>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <li className="nav-item"><a href="#" className="nav-link">خانه</a></li>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <li className="nav-item"><a href="#" className="nav-link">بازی ها</a></li>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <li className="nav-item"><a href="#" className="nav-link">وبلاگ</a></li>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <li className="nav-item"><a href="#" className="nav-link">انجمن ها</a></li>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <li className="nav-item"><a href="#" className="nav-link">ارتباط با ما</a></li>
                                </ul>
                            </nav>
                            {/*end nav burger*/}

                        </div>
                        <div className="col-xl-3 col-lg-2 col-md-2 col-6 img-box">
                            <div className="img">
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a href="#"><img src="images/logo-min.png" alt="bazgame.ir"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </header>
    );
}
export default Header;