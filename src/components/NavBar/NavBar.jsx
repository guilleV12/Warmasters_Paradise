import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import logo from '../../assets/img/logo.png'
import './navbar.css'

const NavBar = ({ }) => {
  const categories = ['Deportes', 'Accion', 'Aventura']
  
  return (
    <header className={`header`}>
      <Link to={'/'} className='logo-container'>
          <img src={logo} alt="" className={'logo-mediano'}/>
          <h1>Warmasters Paradise</h1>
      </Link>

      <nav className="nav">
        {
            categories.map((category) => 
              <NavLink key={category} to={`/category/${category}`} className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}>
                <button className="nav-item">{category}</button>
              </NavLink>
            )
        }
      </nav>

      <CartWidget />
    </header>
  )
}

export default NavBar