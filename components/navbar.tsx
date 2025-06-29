import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'; // Import useRouter hook
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const router = useRouter(); // Initialize router to get current path

  const navItems = [
    { name: 'about', label: 'About', path: '/' }, // Default path for home/about
    { name: 'resume', label: 'Resume', path: '/resume' },
    { name: 'portfolio', label: 'Portfolio', path: '/portfolio' },
    { name: 'blog', label: 'Blog', path: '/blog' },
    { name: 'contact', label: 'Contact', path: '/contact' },
  ];
   // gg 
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        {navItems.map((item) => (
          <li className={styles.navbarItem} key={item.name}>
            <Link href={item.path}>
              <a
                className={`${styles.navbarLink} ${router.pathname === item.path ? styles.active : ''}`}
                data-nav-link
              >
                {item.label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;