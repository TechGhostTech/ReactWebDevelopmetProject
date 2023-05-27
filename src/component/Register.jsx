import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [name, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [number, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [password_repeat, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  var duplicate = false;

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

   const validateForm = async() => {
    const errors = {};
    let response1 = await axios.get(`http://localhost:3000/users?name=${name}`)
    if (response1.data.length !== 0) {
        duplicate = true;
        errors.name = 'This username is already taken';
      }
      console.log(response1);
  

    let response2 = await axios.get(`http://localhost:3000/users?email=${email}`)
    if (response2.data.length !== 0) {

        duplicate = true;
        errors.email = 'There is an account with this email';
      }
      console.log(response2);
   


    if (password !== password_repeat) {
      errors.password_repeat = 'Passwords do not match';
    }

    if (email.trim() === '') {
      errors.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        errors.email = 'Enter a valid email';
      }
    }

    if (number.trim() === '') {
      errors.number = 'Phone number is required';
    } else {
      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(number)) {
        errors.number = 'Enter a valid phone number (Ex: 5522864044)';
      }
    }
    console.log("returning errors")
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = await validateForm();
    
    if (Object.keys(errors).length === 0) {
      try {
        if(!duplicate){
          axios.post(`http://localhost:3000/users/`,  {
          name,
          email,
          number,
          password
         
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
       
        console.log('Registration successful');
        }
       
       
      } catch (error) {
        console.error('There was an error while registration:', error);
      }
    } 
      setErrors(errors);
    
  };    

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input type="text" value={name} onChange={handleUsernameChange} minLength={5} required />
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} required/>
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label>Phone number:</label>
        <input type="tel" value={number} onChange={handlePhoneNumberChange} required/>
        {errors.number && <p>{errors.number}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} minLength={6} maxLength={20} required/>
        {errors.password && <p>{errors.password}</p>}
      </div>
      <div>
        <label>Repeat Password:</label>
        <input type="password" value={password_repeat} onChange={handleConfirmPasswordChange} />
        {errors.password_repeat && <p>{errors.password_repeat}</p>}
      </div>
      <button type="submit">Sign In</button>
    </form>
  );
};

export default Register;
