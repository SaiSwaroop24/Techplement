import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../NavBar';

function Signup() {
  const navigate = useNavigate();
  const [message, setMessage] = useState();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.status === 402) {
        alert('User Already Exists');
        navigate('/signup');
      } else if (response.status === 201) {
        navigate('/');
      } else {
        const data = await response.json();
        console.log(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <NavBar />
      <style>
        {`
          .signup-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 100px;
          }

          form {
            display: flex;
            flex-direction: column;
            width: 90%;
            max-width: 450px;
            padding: 40px;
            border: 1px solid #ccc;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }

          label {
            margin-top: 10px;
          }

          input {
            padding: 8px;
            margin-top: 5px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-weight: 400;
          }

          .signup-container button {
            margin-top: 15px;
            padding: 10px;
            background-color: #083f64;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }

          button:hover {
            background-color: #28658e;
          }

          a {
            text-decoration: none;
          }

          a:hover {
            color: blue;
          }

          .move {
            margin-top: 15px;
          }

          .center {
            text-align: center;
          }

          @media (max-width: 768px) {
            form {
              width: 80%;
            }
          }

          @media (max-width: 480px) {
            form {
              width: 300px;
              padding: 20px;
            }

            label {
              font-size: 14px;
            }

            input {
              padding: 6px;
            }

            button {
              padding: 8px;
            }
          }
        `}
      </style>
      <div className="signup-container">
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type='text'
            name='name'
            placeholder='Enter Your Name'
            onChange={handleChange}
            value={formData.name}
          />
          <br />
          <label>Email:</label>
          <input
            type='email'
            name='email'
            placeholder='Enter Your Email'
            onChange={handleChange}
            value={formData.email}
          />
          <br />
          <label>Password:</label>
          <input
            type='password'
            name='password'
            placeholder='Enter Your Password'
            onChange={handleChange}
            value={formData.password}
          />
          <br />
          <button type='submit'>Sign Up</button>
          <br />
          <div className='move center'>
            Already Registered? <a href='/'>Log In</a>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signup;
