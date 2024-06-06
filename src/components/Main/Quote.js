import React, { useState, useEffect } from 'react';

function Quote({ name }) {
  const [quote, setQuote] = useState('null');

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="quote-box">
      <h4>A Quote for you, {name}</h4>
      <h3>"{quote.content}"</h3>
      <h5>- {quote.author}</h5>
      <style>
        {`
          .quote-box {
            background-color: rgb(143, 155, 185);
            height: auto;
            max-width: 800px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 20px;
            margin: 20px auto;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }

          .quote-box h4 {
            font-size: 22px;
            text-decoration: underline;
          }

          .quote-box h3 {
            margin: 0;
            padding: 0 40px;
            text-align: center;
            font-size: 27px;
            color: #111112;
          }

          .quote-box h5 {
            margin: 10px 0 0;
            color: #48464f;
            font-size: 17px;
          }

          @media (max-width: 768px) {
            .quote-box {
              max-width: 500px;
              padding: 10px;
            }

            .quote-box h3 {
              font-size: 24px;
            }

            .quote-box h5 {
              font-size: 14px;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Quote;
