import React from "react";
import Layout from "../components/Layout/Layout";
import Courser from "../components/Courser";
import {Route, Switch} from "react-router";
import Register from "../components/register/Register";
import {ToastContainer} from "react-toastify";
import Login from "../components/login/Login";

const App = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/racing" component={Courser}/>
                <Route path="/adventure" component={Courser}/>
                <Route path="/register" component={Register}/>
                <Route path="/login" component={Login}/>
                <Route path="/" exact component={Courser}/>
            </Switch>
            <ToastContainer/>
        </Layout>

    );
}
export default App;