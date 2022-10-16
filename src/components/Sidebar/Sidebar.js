import classes from './Sidebar.module.css'
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className={classes.Sidebar}>
            <NavLink to="/profile" className = { navData => navData.isActive ? (classes.Sidebar__elem + ' ' + classes.active) : classes.Sidebar__elem }>Profile</NavLink>
            <NavLink to="/dialogs" className = { navData => navData.isActive ? (classes.Sidebar__elem + ' ' + classes.active) : classes.Sidebar__elem }>Dialogs</NavLink>
            <NavLink to="/news" className = { navData => navData.isActive ? (classes.Sidebar__elem + ' ' + classes.active) : classes.Sidebar__elem }>News</NavLink>
            <NavLink to="/friends" className = { navData => navData.isActive ? (classes.Sidebar__elem + ' ' + classes.active) : classes.Sidebar__elem }>Friends</NavLink>
            <NavLink to="/users" className = { navData => navData.isActive ? (classes.Sidebar__elem + ' ' + classes.active) : classes.Sidebar__elem }>Users</NavLink>
            <NavLink to="" className = { navData => navData.isActive ? (classes.Sidebar__elem + ' ' + classes.active) : classes.Sidebar__elem }>Music</NavLink>
            <br />
            <NavLink to="" className = { navData => navData.isActive ? (classes.Sidebar__elem + ' ' + classes.active) : classes.Sidebar__elem }>Setings</NavLink>
        </div>
    )
}

export default Sidebar;