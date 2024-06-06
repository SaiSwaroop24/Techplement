import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../NavBar';
import Footer from '../Footer';

function KeywordQ() {
  const { keywords } = useParams();
  const [quotes, setQuotes] = useState([]);

  const fetchQuote = async () => {
    try {
      const response = await fetch(`https://api.quotable.io/quotes?query=${encodeURIComponent(keywords)}`);
      const data = await response.json();
      setQuotes(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, [keywords]);

  return (
    <>
      <style>{`
        .quotes-container {
          padding: 50px;
          text-align: center;
        }
        
        .quotes-container h1 {
          font-size: 40px;
          font-style: italic;
          text-decoration: underline;
        }
        
        .quotes {
          display: grid;
          align-items: center;
          justify-content: center;
          grid-gap: 50px;
          margin-top: 100px;
        }
        
        .quote {
          background-color: #8f9bb9;
          padding: 10px;
          border-radius: 5px;
          font-size: 24px;
          height: 120%;
          width: 90%;
          max-width: 960px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          margin: 0 auto;
        }
        
        .quote p {
          margin: 0;
        }
        
        @media (max-width: 768px) {
          .quotes-container h1 {
            font-size: 30px;
          }
        
          .quote {
            font-size: 20px;
            width: 100%;
          }
        }
        
        @media (max-width: 480px) {
          .quotes-container h1 {
            font-size: 24px;
          }
        
          .quote {
            font-size: 18px;
            padding: 10px;
          }
        }
      `}</style>
      <NavBar />
      <div className='quotes-container'>
        <center><h1>Quotes on "{keywords}"</h1></center>
        <div className='quotes'>
          {quotes.map((quote, index) => (
            <div key={index} className='quote'>
              <p>"{quote.content}" - {quote.author}</p>
            </div>
          ))}
          <center><h3>----THE END----</h3></center>
        </div>
      </div>
     
    </>
  );
}

export default KeywordQ;
