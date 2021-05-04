import React, {useRef} from 'react';
import "./styleLogin.css";
import {NavLink} from "react-router-dom";
import {Helmet} from "react-helmet";
import SimpleReactValidator from "simple-react-validator";

const Register = () => {
    let validator = useRef(new SimpleReactValidator({
        messages: {
            required: "پر کردن این فیلد الزامی می باشد",
            email: "ایمیل وارد شده معتبر نمی باشد",
            min: "تعداد کاراکتر وارد شده کمتر از 5 می باشد"
        },
        element: message => <div className="errorValidator">{message}</div>
    }));
    return (
        <section className="register">
            <Helmet>
                <title>bazgame/ورود به سایت</title>
            </Helmet>
            <div className="img-register">
                <div className="row">
                    <div className="col-xl-4"/>
                    <div className="col-xl-8">
                        <div className="img">
                            <img src="./images/register/container-bg-min.png" alt="register"/>
                            <div className="form">
                                <form id="form">
                                    <h2>ورود</h2>
                                    <p>اگر قبلا عضو نشده اید <NavLink to="/register">عضو</NavLink> شوید </p>
                                    <div className="inputs">
                                        <div className="email">
                                            <input type="email" placeholder="ایمیل"
                                                   name="email"/>
                                        </div>
                                        <div className="password">
                                            <input id="inputPassword" type="password" placeholder="رمز عبور"/>
                                            <div className="eye-show-hidden-password">
                                                <i className="fa fa-eye" id="iconShowPassword"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="check-box">
                                        <label htmlFor="checked-policy"> <a href="#"> قوانین و مقررات </a> سایت را می
                                            پذیرم
                                        </label>
                                        <input type="checkbox" id="checked-policy" className="form-check-input"
                                               name="checkbox"
                                        />
                                    </div>
                                    <div className="buttons">
                                        <button className="register-button" type="submit">ورود</button>
                                        <NavLink to="/register">
                                            <button className="login-button" type="button">عضویت</button>
                                        </NavLink>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
