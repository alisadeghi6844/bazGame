import React from "react";
import {NavLink, Switch} from "react-router-dom";
import {Route} from "react-router";
import NewRecentGame from "./common/NewRecentGame";
import RacingRecentGame from "./common/RacingRecentGame";
import AdventureRecentGame from "./common/AdventureRecentGame";

const RecentGames = () => {
    return (
        <section className="recent-games">
            <div className="recent-box">
                <div className="container">
                    <nav className="nav-recent-game">
                        <ul className="nav">
                            <li className="nav-item">
                                <NavLink to="/" exact activeClassName="active-recent-new">NEW</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/racing" activeClassName="active-recent-racing">RACING</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/adventure" activeClassName="active-recent-adventure">ADVENTURE</NavLink>
                            </li>
                        </ul>
                    </nav>

                    {/*box*/}
                    <div className="box-recent-game">
                        <Switch>
                            <Route path="/" exact component={NewRecentGame}/>
                            <Route path="/racing" exact component={RacingRecentGame}/>
                            <Route path="/adventure" exact component={AdventureRecentGame}/>
                        </Switch>
                    </div>
                    {/*end box*/}

                </div>
            </div>
        </section>
    );
}
export default RecentGames;