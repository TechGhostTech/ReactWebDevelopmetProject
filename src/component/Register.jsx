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
        errors.name = 'isim kullanilmis';
      }
      console.log(response1);
  

    let response2 = await axios.get(`http://localhost:3000/users?email=${email}`)
    if (response2.data.length !== 0) {

        duplicate = true;
        errors.email = 'email kullanilmis';
      }
      console.log(response2);
   


    if (password !== password_repeat) {
      errors.password_repeat = 'Şifreler eşleşmiyor';
    }

    if (email.trim() === '') {
      errors.email = 'E-posta zorunludur';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        errors.email = 'Geçerli bir e-posta adresi girin';
      }
    }

    if (number.trim() === '') {
      errors.number = 'Telefon numarası zorunludur';
    } else {
      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(number)) {
        errors.number = 'Geçerli bir telefon numarası girin (örn: 5551234567)';
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
       
        console.log('Kayıt olma başarılı');
        }
       
       
      } catch (error) {
        console.error('Kayıt olma sırasında bir hata oluştu:', error);
      }
    } 
      setErrors(errors);
    
  };    

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Kullanıcı Adı:</label>
        <input type="text" value={name} onChange={handleUsernameChange} minLength={5} required />
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div>
        <label>E-posta:</label>
        <input type="email" value={email} onChange={handleEmailChange} required/>
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label>Telefon Numarası:</label>
        <input type="tel" value={number} onChange={handlePhoneNumberChange} required/>
        {errors.number && <p>{errors.number}</p>}
      </div>
      <div>
        <label>Şifre:</label>
        <input type="password" value={password} onChange={handlePasswordChange} minLength={6} maxLength={20} required/>
        {errors.password && <p>{errors.password}</p>}
      </div>
      <div>
        <label>Şifre Tekrar:</label>
        <input type="password" value={password_repeat} onChange={handleConfirmPasswordChange} />
        {errors.password_repeat && <p>{errors.password_repeat}</p>}
      </div>
      <button type="submit">Kayıt Ol</button>
    </form>
  );
};

export default Register;
