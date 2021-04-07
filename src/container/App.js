import React from "react";
import Header from "../components/Header";
import TopSlider from "../components/TopSlider";
import LoadSite from "../components/common/LoadSite";
import NewsBox from "../components/NewsBox";
import IntroducingGames from "../components/IntroducingGames";
import RecentGames from "../components/RecentGames";

const App = () => {
    return (
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
                <IntroducingGames/>
                <RecentGames/>
            </main>
            {/*end main*/}
        </div>
    );
}
export default App;