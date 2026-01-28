// src/components/NavBar.jsx
import { NavLink } from 'react-router-dom';

export default function NavBar({ brand = 'Task X' }) {
  const cls = {
    root: 'nav',
    brand: 'nav__brand',
    logo: 'nav__logo',
    links: 'nav__links',
    link: 'nav__link',
  };

  return (
    <div className={cls.root} role="banner">
      {/* Brand / Logo */}
      <NavLink to="/todos" className={cls.brand} aria-label={brand}>
        <img
          src={`${process.env.PUBLIC_URL}/favicon.svg`}
          alt=""
          className={cls.logo}
          aria-hidden="true"
        />
        <span>{brand}</span>
      </NavLink>

      {/* Primary Nav */}
      <nav className={cls.links} aria-label="Primary navigation">
        <NavLink
          to="/todos"
          className={({ isActive }) => `${cls.link}${isActive ? ' is-active' : ''}`}
        >
          Todos
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => `${cls.link}${isActive ? ' is-active' : ''}`}
        >
          Contact
        </NavLink>
      </nav>
    </div>
  );
}
