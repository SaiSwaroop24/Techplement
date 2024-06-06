import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Authors() {
  const authors = [
    "William Shakespeare", "Albert Einstein", "Mark Twain", "Oscar Wilde", "Mahatma Gandhi",
    "Winston Churchill", "Friedrich Nietzsche", "Aristotle", "Ralph Waldo Emerson", 
    "George Bernard Shaw", "Jane Austen", "Leo Tolstoy", "Charles Dickens", "Samuel Johnson",
    "Sai Baba", "Confucius", "Ernest Hemingway", "Benjamin Franklin", "Socrates", "George S. Patton"
  ];

  const navigate = useNavigate();
  const handleClick = (author) => {
    navigate(`/quotes/${encodeURIComponent(author)}`);
  };
  const [name, setName] = useState('');

  const searchAuthor = () => {
    navigate(`/quotes/${encodeURIComponent(name)}`);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setName(value);
  };

  const styles = `
    .container {
      padding: 50px;
      text-align: center;
    }
    
    .authors {
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
      width: calc(50% - 300px); /* Set width to 50% minus margin */
      box-sizing: border-box; /* Include padding and border in width calculation */
    }
    
    .search {
      position:absolute;
      left:70%;
    }
    
    .search input {
      padding: 8px;
      margin-right: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 16px;
      
    }
    
    .search button {
      padding: 8px 20px;
      background-color: #2c3e50;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    
    .search button:hover {
      background-color: #28658e;
    }
    @media (max-width: 768px) {
      .namea {
        width: 200px; /* Set width to 100% in mobile view */
        margin: 5px 0; /* Adjust margin for smaller screens */
      }

      
    .search {
      margin-left:-90%;
      margin-top:-470%;
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className='container'>
        <h1>Popular Authors</h1>
        <div className='authors'>
          {authors.map((author, index) => (
            <button key={index} onClick={() => handleClick(author)} className='namea'>
              {author}
            </button>
          ))}
        </div>
      </div>
      <div className='search'>
        <input 
          type='text' 
          value={name} 
          onChange={handleChange} 
          placeholder='Search Other Authors'
        />
        <button onClick={searchAuthor}>Search</button>
      </div>
    </>
  );
}

export default Authors;
