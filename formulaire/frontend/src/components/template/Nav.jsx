import React from 'react'
import './Nav.css'
import NavItem from './NavItem'


export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavItem href="/" icon="home" title="Home"/>
            <NavItem href="/users" icon="user" title="Utilisateurs"/>
        </nav>
    </aside>