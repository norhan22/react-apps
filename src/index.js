
import ReactDOM from "react-dom/client";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import App from "./layout/app";
import HelloWorld from "./modules/HelloWorld/App";
import TickClock from "./modules/TickClock/App";
import Users from './modules/Users/views/index'

const root = ReactDOM.createRoot(
    document.getElementById("root")
);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="HelloWorld" element={<HelloWorld />} />
                <Route path="TickClock" element={<TickClock />} />
                <Route path="Users" element={<Users />} />
            </Route>
        </Routes>
    </BrowserRouter>
);