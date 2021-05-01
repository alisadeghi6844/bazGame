import React from "react";
import LoadSite from "../common/LoadSite";
import Header from "../Header";
import TopSlider from "../TopSlider";
import NewsBox from "../NewsBox";
import Footer from "../footer/Footer";
import {withRouter} from "react-router";

const Layout = (props) => {
    const {pathname} = props.location;
    return (
        <div>
            <div id="site">

                {/*div for load site*/}
                <LoadSite/>
                {/*end div for load site*/}

                {/*Header*/}
                <Header/>
                {/*EndHeader*/}

                {/*main*/}
                <main id="main">
                    {pathname==="/"||pathname==="/racing"||pathname==="/adventure"?<TopSlider/>:null}
                    <NewsBox/>
                    {props.children}
                </main>
                {/*end main*/}
                <Footer/>
            </div>
        </div>
    );
}
export default withRouter(Layout);