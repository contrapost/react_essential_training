/**
 * Created by alexandershipunov on 06/03/2017.
 **/

import { Link } from 'react-router';
import Home from 'react-icons/lib/fa/home';
import AddDayIcon from 'react-icons/lib/fa/calendar-plus-o';
import ListDaysIcon from 'react-icons/lib/fa/table';

export const Menu = () =>
    <nav className="menu">
        <Link to="/" activeClassName="selected">
            <Home />
        </Link>
        <Link to="/add-day" activeClassName="selected">
            <AddDayIcon />
        </Link>
        <Link to="/list-days" activeClassName="selected">
            <ListDaysIcon />
        </Link>
    </nav>;