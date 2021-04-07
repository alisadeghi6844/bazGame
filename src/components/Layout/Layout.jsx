import React from "react";
import LoadSite from "../common/LoadSite";
import Header from "../Header";
import TopSlider from "../TopSlider";
import NewsBox from "../NewsBox";

const Layout = (props) => {
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
                    <TopSlider/>
                    <NewsBox/>
                    {props.children}
                </main>
                {/*end main*/}
            </div>
        </div>
    );
}
export default Layout;