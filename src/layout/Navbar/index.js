import React from 'react';
import { BackBtn } from '../../components';

import { NavLink } from 'react-router-dom';

const NavBar = ()=>{
    return(
        <nav>
            <NavLink exact to="/artists" activeClassName="current">Artists</NavLink>
            <NavLink to="/music">Music</NavLink>
            <NavLink to="/apiData">Api Data</NavLink>
            <BackBtn />
        </nav>
    )
};

export default NavBar;