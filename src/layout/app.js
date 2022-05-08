import Header from './header/index'
import Footer from './footer/index'
import {Outlet} from "react-router-dom";
import './App.scss'
const app = ()=>{
    return  (
        <div className='App'>
            <Header/>
            <main>
                <Outlet />
            </main>
            <Footer/>
    </div>

)
}
export default app