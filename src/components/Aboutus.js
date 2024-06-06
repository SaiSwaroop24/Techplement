import React from 'react';
import NavBar from './NavBar';

function Aboutus() {
  const styles = {
    aboutus: {
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      color: 'black',
      lineHeight: '1.6',
    },
    heading1: {
      fontSize: '2em',
      marginBottom: '20px',
      color: 'black',
    },
    heading4: {
      fontSize: '1.5em',
      marginTop: '20px',
      marginBottom: '10px',
      color: 'black',
    },
    listItem: {
      marginBottom: '10px',
    },
    boldText: {
      fontWeight: 'bold',
    },
    paragraph: {
      marginBottom: '15px',
    },
    container: {
      maxWidth: '800px',
      marginTop:'100px',
      marginBottom:'100px',
      margin: '0 auto',
      padding: '20px',
      borderRadius: '10px',
    },
  };

  return (
    <>
    <NavBar/>
    <div style={styles.container}>
      <div style={styles.aboutus}>
        <h1 style={styles.heading1}>About Us</h1>
        <p style={styles.paragraph}>
          Welcome to <b>QuoteGalaxy</b>, your ultimate destination for inspiration and wisdom through quotes. Our mission is to bring the power of words to your fingertips, providing you with a unique and engaging experience every time you visit.
        </p>
        <h4 style={styles.heading4}>What We Offer</h4>
        <ul>
          <li style={styles.listItem}>
            <span style={styles.boldText}>Random Quotes:</span> On each visit to our site, you'll be greeted with a random quote that aims to inspire, motivate, or bring a smile to your face. These quotes are handpicked from a diverse range of authors and themes to ensure you always find something new and thought-provoking.
          </li>
          <li style={styles.listItem}>
            <span style={styles.boldText}>Explore Famous Authors:</span> Dive deep into the minds of famous authors. Click on any author's name to explore a curated collection of their quotes, offering insights into their thoughts and philosophies. Whether you’re a fan of classic literature or modern thinkers, you’ll find a treasure trove of wisdom here.
          </li>
          <li style={styles.listItem}>
            <span style={styles.boldText}>Search Functionality:</span> Looking for a specific quote or author? Use our powerful search feature to find quotes by your favorite authors or on particular topics and keywords. This makes it easy to find exactly what you’re looking for, whether it’s a quote for your speech, an essay, or just a dose of daily inspiration.
          </li>
        </ul>
        <h4 style={styles.heading4}>Our Vision</h4>
        <p style={styles.paragraph}>
          At <b>QuoteGalaxy</b>, we believe in the transformative power of words. Our goal is to create a space where you can discover, share, and reflect on the wisdom of the ages. We strive to build a community of like-minded individuals who appreciate the beauty of language and the impact it can have on our lives.
        </p>
        <h4 style={styles.heading4}>Join Us</h4>
        <p style={styles.paragraph}>
          Become a part of our growing community by visiting our site regularly. Share your favorite quotes with friends and family, and explore the endless possibilities that words can offer. Together, let's celebrate the richness of human thought and the timeless wisdom captured in quotes.
          <br />
          <br/>
          Thank you for visiting <b>QuoteGalaxy</b>. We hope you find inspiration and joy in the quotes we share.
        </p>
      </div>
    </div>
    </>
  );
}

export default Aboutus;
