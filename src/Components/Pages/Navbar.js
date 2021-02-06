import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css';

const Navbar = () => {

    const [click, setClick] = useState(false)

    const clickHandler = () => {
        setClick(!click)
    }

    return (
        <nav className="navbar">
            <Link to="/" className="navbar-brand">
                efrain <span>rodriguez</span>
            </Link>
            <div onClick={() => clickHandler()} className="navbar-burguer">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <ul className={click ? 'navbar-list navbar-active' : 'navbar-list'}>
                <li className="navbar-item">
                    <Link to="/" className="navbar-link">About Me</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/" className="navbar-link">Projects</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/" className="navbar-link">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
