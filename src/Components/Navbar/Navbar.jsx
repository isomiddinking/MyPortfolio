import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Menyuni ochish/yopish funksiyasi
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // Bodyga 'no-scroll' klassini qo'shish/olib tashlash
    if (!menuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  };

  // Link bosilganda menyuni yopish
  const closeMenu = () => {
    setMenuOpen(false);
    document.body.classList.remove('no-scroll'); // Menyuni yopganda skrollni qayta yoqish
  };

  return (
    <header data-aos="fade-down">
      <div className="logo">
        <h2>Isomiddin<span className='logospan'>.UZ</span></h2>
      </div>

      {/* overlay (qoplam) elementini qo'shamiz */}
      {menuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}

      <nav className={menuOpen ? 'nav-open' : ''}>
        <ul className="nav-links">
           <li className={location.pathname === "/sidebar" ? "activy" : ""} >
            <Link to="/sidebar" onClick={closeMenu} className='sidebar'>Sidebar</Link>
          </li>
          <li className={location.pathname === "/" ? "activy" : ""}>
            <Link to="/" onClick={closeMenu}>Bosh sahifa</Link>
          </li>
          <li className={location.pathname === "/haqida" ? "activy" : ""}>
            <Link to="/haqida" onClick={closeMenu}>Haqida</Link>
          </li>
          <li className={location.pathname === "/loyihalar" ? "activy" : ""}>
            <Link to="/loyihalar" onClick={closeMenu}>Loyihalar</Link>
          </li>
          <li className={location.pathname === "/boglanish" ? "activy" : ""}>
            <Link to="/boglanish" onClick={closeMenu}>Bog’lanish</Link>
          </li>
        </ul>

        <a
          href="https://github.com/isomiddinking"
          className='github'
          target='_blank'
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </nav>

      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
};

export default Navbar;