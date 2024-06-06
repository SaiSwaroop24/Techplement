import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Keywords() {
  const keywords = [
    "Motivation", "Inspiration", "Love", "Life", "Happiness", "Success", "Wisdom", "Friendship", "Courage",
    "Strength", "Positivity", "Leadership", "Hope", "Knowledge", "Perseverance", "Ambition", "Change", "Dreams", "Mindfulness", "Gratitude"
  ];

  const navigate = useNavigate();

  const handleClick = (keyword) => {
    navigate(`/keyword/${encodeURIComponent(keyword)}`);
  };

  const [name, setName] = useState('');

  const searchKeyword = () => {
    navigate(`/keyword/${encodeURIComponent(name)}`);
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const styles = `
    .container {
      padding: 30px;
      text-align: center;
    }
    
    .keywords {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
    }
    
    .namea {
      background-color: rgb(143, 155, 185);
      border-radius: 5px;
      padding: 20px;
      margin: 5px;
      color: black;
      font-size: 18px;
      font-weight: bold;
      text-align: center;
      width: calc(50% - 400px); /* Set width to 50% minus margin */
      box-sizing: border-box; /* Include padding and border in width calculation */
    }
    
    .button {
      background-color: rgb(182, 189, 207);
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      color: white;
    }
    
    
    
    .searchInput {
      padding: 8px;
      margin-right: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 16px;
    }
    
    .searchButton {
      padding: 8px 20px;
      background-color: #2c3e50;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    
    .searchButton:hover {
      background-color: #28658e;
    }
    
    @media (max-width: 768px) {
      .namea {
        width: 200px; /* Set width to 100% in mobile view */
        margin: 5px 0; /* Adjust margin for smaller screens */
      }
    
      .authors {
        margin-top: 100px;
      }
    
      .search {
        margin-left: -80%;
        
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className='container'>
        <h1>Popular Keywords</h1>
        <div className='keywords'>
          {keywords.map((keyword, index) => (
            <button key={index} onClick={() => handleClick(keyword)} className='namea'>
              {keyword}
            </button>
          ))}
        </div>
      </div>
      <div className='search'>
        <input 
          type='text' 
          value={name} 
          onChange={handleChange} 
          placeholder='Search Other Keywords'
          className='searchInput'
        />
        <button onClick={searchKeyword} className='searchButton'>Search</button>
      </div>
    </>
  );
}

export default Keywords;
