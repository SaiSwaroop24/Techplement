import React from 'react';
import NavBar from '../NavBar';
import Quote from './Quote';
import Authors from './Authors';
import Keywords from './Keywords';
import './Main.css';
import { useParams, useNavigate } from 'react-router-dom';
import Footer from '../Footer';

function Main() {
  const navigate = useNavigate();
  const { name } = useParams();

  const handleClick = () => {
    localStorage.removeItem('username');
    navigate('/', { replace: true });
  }

  return (
    <>
      <NavBar name={name} /> 
      <div className='btn'>
        <button onClick={handleClick}>LogOut</button>
      </div>
      <div className="main-container">
        <div className="quote-section">
          <Quote name={name}/>
        </div>
        <div className="authors-section">
          <Authors />
        </div>
        <br/>
        <div className="keywords-section">
          <Keywords />
        </div>
        <div className='myfooter'>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Main;
