

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import {Suspense ,lazy} from 'react'


import Loader from '../layout/loader/index'
const App= lazy(() => import('../layout/mainLayout'));
const HelloWorld= lazy(() => import('../modules/HelloWorld/App'));
const TickClock= lazy(() => import('../modules/TickClock/App'));
const Users= lazy(() => import('../modules/Users/views/index'))

const index = ()=>   {
    return (
        <Suspense fallback={<Loader/>}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App/>}>
                        <Route path="HelloWorld" element={<HelloWorld/>}/>
                        <Route path="TickClock" element={<TickClock/>}/>
                        <Route path="Users" element={<Users/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </Suspense>

    )

};
export default index;