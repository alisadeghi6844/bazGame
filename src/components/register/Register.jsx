import React, {useState, useRef, useEffect} from 'react';
import "./style.css";
import {NavLink} from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";
import {userRegister} from "../../services/userRegister";
import {toast} from "react-toastify";
import Loading from "../Loading/Loading";
import {Helmet} from "react-helmet";

const Register = ({history}) => {
    const [, setUpdate] = useState();
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checkbox, setCheckbox] = useState();
    const [loading, setLoading] = useState(false);


    let validator = useRef(new SimpleReactValidator({
        messages: {
            required: "پر کردن این فیلد الزامی می باشد",
            email: "ایمیل وارد شده معتبر نمی باشد",
            min: "تعداد کاراکتر وارد شده کمتر از 5 می باشد"
        },
        element: message => <div className="errorValidator">{message}</div>
    }));
    const reset = () => {
        setFullname("");
        setEmail("");
        setPassword("");
    }
    const user = {
        fullname,
        email,
        password
    }

    /*    useEffect(() => {
            document.title = "bazgame/عضویت در سایت";
        }, []);*/

    const handleSubmitRegister = async (e) => {
        e.preventDefault();
        try {
            if (validator.current.allValid()) {
                const {status} = await userRegister(user);
                if (status === 201) {
                    setLoading(true);
                    setTimeout(function () {
                        toast.success("کاربر با موفقیت اضافه شد", {
                            position: "top-right",
                            closeOnClick: true
                        });
                        history.replace("./login");
                        reset();
                    }, 1500);
                }
            } else {
                validator.current.showMessages();
                setUpdate(1);

            }
        } catch (e) {
            console.log(e);
        }
    }

    const handleClickShowMessage = () => {
        const inputPassword = document.getElementById("inputPassword");
        const iconShowPassword = document.getElementById("iconShowPassword");
        if (inputPassword.type === "password") {
            inputPassword.type = "text";
            iconShowPassword.classList.remove("fa-eye");
            iconShowPassword.classList.add("fa-eye-slash");
        } else {
            inputPassword.type = "password";
            iconShowPassword.classList.remove("fa-eye-slash");
            iconShowPassword.classList.add("fa-eye");
        }
    }

    return (
        <section className="register">
            {loading ? (
                <Loading/>
            ) : null}
            <Helmet>
                <title>bazgame/عضویت در سایت</title>
            </Helmet>
            <div className="img-register">
                <div className="row">
                    <div className="col-xl-4"/>
                    <div className="col-xl-8">
                        <div className="img">
                            <img src="./images/register/container-bg-min.png" alt="register"/>
                            <div className="form">
                                <form id="form" onSubmit={handleSubmitRegister}>
                                    <h2>عضویت</h2>
                                    <p>اگر قبلا عضو شده اید <NavLink to="/login">وارد</NavLink> شوید </p>
                                    <div className="inputs">
                                        <div className="fullname">
                                            <input type="text" placeholder="نام کاربری" name="fullname"
                                                   value={fullname}
                                                   onChange={event => {
                                                       setFullname(event.target.value);
                                                       validator.current.showMessageFor('fullname');
                                                   }}
                                            />
                                            {validator.current.message("fullname", fullname, "min:5|required")}
                                        </div>
                                        <div className="email">
                                            <input type="email" placeholder="ایمیل"
                                                   name="email"
                                                   value={email}
                                                   onChange={event => {
                                                       setEmail(event.target.value);
                                                       validator.current.showMessageFor('email');
                                                   }}
                                            />
                                            {validator.current.message("email", email, "email|required")}
                                        </div>
                                        <div className="password">
                                            <input id="inputPassword" type="password" placeholder="رمز عبور"
                                                   value={password}
                                                   onChange={event => {
                                                       setPassword(event.target.value);
                                                       validator.current.showMessageFor('password');
                                                   }}
                                            />
                                            {validator.current.message("password", password, "required|min:5")}
                                            <div className="eye-show-hidden-password">
                                                <i className="fa fa-eye" id="iconShowPassword"
                                                   onClick={handleClickShowMessage}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="check-box">
                                        <label htmlFor="checked-policy"> <a href="#"> قوانین و مقررات </a> سایت را می
                                            پذیرم
                                        </label>
                                        <input type="checkbox" id="checked-policy" className="form-check-input"
                                               name="checkbox"
                                               value={checkbox}
                                               onChange={event => {
                                                   setCheckbox(event.currentTarget.checked);
                                                   validator.current.showMessageFor('checkbox');
                                               }}
                                        />
                                        {validator.current.message("checkbox", checkbox, "required")}
                                    </div>
                                    <div className="buttons">
                                        <button className="register-button" type="submit">عضویت</button>
                                        <NavLink to="/login"><button className="login-button" type="button">ورود</button></NavLink>
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
