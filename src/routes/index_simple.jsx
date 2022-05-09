

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import App from "../layout/mainLayout";
import HelloWorld from "../modules/HelloWorld/App";
import TickClock from "../modules/TickClock/App";
import Users from '../modules/Users/views'

export default function index ()   {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route path="HelloWorld" element={<HelloWorld/>}/>
                    <Route path="TickClock" element={<TickClock/>}/>
                    <Route path="Users" element={<Users/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )

};