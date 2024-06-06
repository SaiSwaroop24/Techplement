import React from 'react';
import { useNavigate } from 'react-router-dom';

function NavBar({ name }) {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    if (name) {
      navigate(`/main/${name}`);
    } else {
      navigate('/');
    }
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#2c3e50',
      padding: '10px 20px',
    },
    name: {
      h1: {
        color: '#ecf0f1',
        fontFamily: 'Arial, sans-serif',
        margin: 0,
        cursor: 'pointer',
      },
    },
    items: {
      listStyle: 'none',
      display: 'flex',
      gap: '20px',
      margin: 0,
      padding: 0,
    },
    item: {
      display: 'inline',
    },
    link: {
      color: '#ecf0f1',
      textDecoration: 'none',
      fontFamily: 'Arial, sans-serif',
      transition: 'color 0.3s ease',
    },
    linkHover: {
      color: '#3498db',
    },
    responsive: {
      navbar: {
        flexDirection: 'column',
        padding: '10px',
      },
      items: {
        marginTop: '10px',
        gap: '10px',
      },
      item: {
        display: 'block',
      },
    },
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.name}>
        <h1 onClick={handleHomeClick} style={styles.name.h1}>QuoteGalaxy</h1>
      </div>
      <ul style={styles.items}>
        <li style={styles.item}><a href='/aboutus' style={styles.link}>About Us</a></li>
        <li style={styles.item}><a href="#" onClick={scrollToBottom} style={styles.link}>Contact Us</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
