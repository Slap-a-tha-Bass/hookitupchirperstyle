import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav justify-content-center align-items-center p-3 shadow">
            <NavLink className="btn btn-link mx-4" activeClassName="active" exact to="/">My Chirps</NavLink>
            <NavLink className="btn btn-link mx-4" activeClassName="active" exact to="/stories">Stories</NavLink>
        </nav>
    )
}

export default Navbar
