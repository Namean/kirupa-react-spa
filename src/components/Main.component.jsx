import { Route, NavLink, HashRouter, Routes } from 'react-router-dom';

import Home from './pages/Home.component';
import Stuff from './pages/Stuff.component';
import Contact from './pages/Contact.component';

import './Kirupa.css';

const Main = () => {
    return (
        <HashRouter>
            <div>
                <h1>Simple SPA</h1>
                <ul className="header">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/stuff">Stuff</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
                <div className='content'>
                    <Routes>
                    <Route exact path="/" Component={Home} />
                    <Route path="/stuff" Component={Stuff} />
                    <Route path="/contact" Component={Contact} />
                    </Routes>
                </div>
            </div>

        </HashRouter>

    );
}


export default Main;