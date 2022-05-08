import {Link } from "react-router-dom";
import logo from '../../assets/images/logo.svg';
import './style.scss'
const Layout = () => {
    return (
        <header>
            <img src={logo} className="App-logo" alt="logo" />
            <nav>
                <ul>
                    <li>
                        <Link to="/HelloWorld" className={"App-link"}>hello world</Link>
                    </li>
                    <li>
                        <Link to="/tickClock" className={"App-link"}>tickClock</Link>
                    </li>
                    <li>
                        <Link to="/Users" className={"App-link"}>Users</Link>
                    </li>
                </ul>
            </nav>
        </header>

    )
};

export default Layout;
