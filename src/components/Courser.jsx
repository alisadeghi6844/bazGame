import React from "react";
import IntroducingGames from "./IntroducingGames";
import RecentGames from "./RecentGames";
import IntroductionGame from "./IntroductionGame";
import RecentReviews from "./RecentReviews";
import {Helmet} from "react-helmet";

const Courser = () => {
    return (
        <div>
            <Helmet>
                <title>bazgame/صفحه اصلی</title>
            </Helmet>
            <IntroducingGames/>
            <RecentGames/>
            <IntroductionGame/>
            <RecentReviews/>
        </div>
    );
}
export default Courser;