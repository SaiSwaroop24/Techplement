import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../NavBar';

function Login() {
  const navigate = useNavigate();
  const [submit, setSubmit] = useState({
    name: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubmit((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!submit.name || !submit.password) {
      setError('Please fill in both fields.');
      return;
    }
    setError('');
    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(submit)
      });
      if (response.status === 201) {
        localStorage.setItem('username', submit.name);
        navigate(`/main/${submit.name}`);
      } else {
        const data = await response.json();
        setError(data.message || 'An error occurred during login. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred during login. Please try again.');
    }
  };

  return (
    <>
      <NavBar />
      <style>
        {`
          form {
            display: flex;
            flex-direction: column;
            margin: 0 auto;
            width: 90%;
            padding:5vh;
            max-width: 450px;
            border: 1px solid #ccc;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }

          .login {
            margin-top: 100px;
          }

          label {
            margin-top: 10px;
            font-size: 16px;
            font-weight: 400;
          }

          input {
            padding: 8px;
            margin-top: 5px;
            border: 1px solid #ccc;
            border-radius: 4px;
          }

          .login button {
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

          .error {
            color: red;
            font-size: 14px;
            margin-top: 10px;
          }

          .move {
            margin-top: 15px;
          }

          .center {
            text-align: center;
          }

          @media (max-width: 768px) {
            form {
              width: 50%;
            }
          }

          @media (max-width: 480px) {
            form {
              width:300px;
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
      <div className='login'>
        <form onSubmit={handleSubmit}>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Enter Your Name'
            onChange={handleChange}
            value={submit.name}
          />
          <br />
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Enter Your Password'
            onChange={handleChange}
            value={submit.password}
          />
          <br />
          <button type='submit'>Submit</button>
          {error && <p className='error'>{error}</p>}
          <div className='move center'>
            Not Registered? <a href='/signup'>Create Account</a>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
