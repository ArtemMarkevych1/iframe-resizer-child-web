import {useMemo} from "react";
import {Route, Routes} from "react-router-dom";
import {useStickers} from "./hooks";
import {getTeam} from "./utils";
import {Home} from "./pages/home/home.component";
import {MobileTeam} from "./pages/mobile-team/mobile-team.component";
import {WebTeamComponent} from "./pages/web-team/web-team.component";
import {TEAM_TYPES} from "./constants";
import {useStickersState} from "./hooks/useStickersState";

import "./App.scss"

export const App = () => {
    const {sets, setSets, teammates, setTeammates} = useStickersState();

    const webData = useMemo(() => getTeam(teammates, TEAM_TYPES.WEB_TEAM), [teammates]);
    const mobileData = useMemo(() => getTeam(teammates, TEAM_TYPES.MOBILE_WEB_TEAM), [teammates]);

    return (
        <div className="container">
            <Routes>
                <Route
                    path="/"
                    element={<Home sets={sets} setSets={setSets} setTeammates={setTeammates}/>}
                />
                <Route
                    path="2/webteam"
                    element={<WebTeamComponent data={webData}/>}
                />
                <Route
                    path="3/mobilewebteam"
                    element={<MobileTeam data={mobileData}/>}
                />
            </Routes>
        </div>
    );
};
