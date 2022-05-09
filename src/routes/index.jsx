import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import React, {Suspense} from 'react';
import Loader from '../layout/loader/index'
import routesArr from "./routes_arr";

const routeEl = (path,com,key)=> <Route path={path} element={<com />} key={key}/>

const index = ()=>   {
    return (
        <Suspense fallback={<Loader/>}>
            <BrowserRouter>
                <Routes>
                    {routesArr.map((route, index) => (
                        // Render more <Route>s with the same paths as
                        // above, but different components this time.
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            element={<route.component />}

                        >
                            {
                                route.children.map((ch,chIndex)=><Route
                                    key={chIndex}
                                    path={ch.path}
                                    exact={ch.exact}
                                    element={<ch.component />}

                                />)
                            }
                        </Route>
                    ))}
                </Routes>
            </BrowserRouter>
        </Suspense>

    )

};
export default index;