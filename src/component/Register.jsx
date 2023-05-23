import React, { useState } from 'react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

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
  const validateForm = () => {
    const errors = {};

    

    if (password !== confirmPassword) {
      errors.confirmPassword = 'Şifreler eşleşmiyor';
    }

    // E-posta doğrulaması
    if (email.trim() === '') {
      errors.email = 'E-posta zorunludur';
    } else {
      // E-posta sözdizimi kontrolü
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        errors.email = 'Geçerli bir e-posta adresi girin';
      }
    }

    // Telefon numarası doğrulaması
    if (phoneNumber.trim() === '') {
      errors.phoneNumber = 'Telefon numarası zorunludur';
    } else {
      // Telefon numarası format kontrolü
      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(phoneNumber)) {
        errors.phoneNumber = 'Geçerli bir telefon numarası girin (örn: 5551234567)';
      }
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      // Doğrulama başarılı, kayıt olma işlemi gerçekleştirilebilir
      console.log('Kayıt olma başarılı');
    } else {
      // Hataları ayarla
      setErrors(errors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Kullanıcı Adı:</label>
        <input type="text" value={username} onChange={handleUsernameChange} minLength={5} required />
        {errors.username && <p>{errors.username}</p>}
      </div>
      
      <div>
        <label>E-posta:</label>
        <input type="email" value={email} onChange={handleEmailChange} required/>
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label>Telefon Numarası:</label>
        <input type="tel" value={phoneNumber} onChange={handlePhoneNumberChange} required/>
        {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
      </div>
      <div>
        <label>Şifre:</label>
        <input type="password" value={password} onChange={handlePasswordChange} minLength={6} maxLength ={20} required/>
        {errors.password && <p>{errors.password}</p>}
      </div>
      <div>
        <label>Şifre Tekrar:</label>
        <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
      </div>
      <button type="submit">Kayıt Ol</button>
    </form>
  );
};

export default Register;
