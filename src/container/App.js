import React from "react";
import Layout from "../components/Layout/Layout";
import Courser from "../components/Courser";
import {Route, Switch} from "react-router";
import Register from "../components/register/Register";
import {ToastContainer} from "react-toastify";

const App = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/racing" component={Courser}/>
                <Route path="/adventure" component={Courser}/>
                <Route path="/" exact component={Courser}/>
                <Route path="/register" component={Register}/>
            </Switch>
            <ToastContainer/>
        </Layout>

    );
}
export default App;