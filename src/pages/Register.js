import { useState } from 'react';
import axios from 'axios';

function Register() {
  const [name, setName] = useState('');
  const [email, setMail] = useState('');
  const [password, setPass] = useState('');

  const handleRegister = async () => {
    try {
      const res = await axios.post('https://warrior.ge/api/register', {
        name,
        email,
        password,
      });

      alert('რეგისტრაცია დასრულდა წარმატებით!');
    } catch (err) {
      alert('რეგისტრაციისას დაფიქსირდა შეცდომა!');
      console.error(err);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '70vh' }}>
      <div className="card p-4 shadow-sm" style={{ width: '100%', maxWidth: '400px' }}>
        <h3 className="text-center mb-4">რეგისტრაცია</h3>

        <div className="mb-3">
          <label className="form-label">სახელი</label>
          <input
            type="text"
            className="form-control"
            placeholder="შეიყვანეთ სახელი"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">ელ. ფოსტა</label>
          <input
            type="email"
            className="form-control"
            placeholder="შეიყვანეთ ელ. ფოსტა"
            value={email}
            onChange={(e) => setMail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">პაროლი</label>
          <input
            type="password"
            className="form-control"
            placeholder="შეიყვანეთ პაროლი"
            value={password}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>

        <button className="btn btn-success w-100" onClick={handleRegister}>
          რეგისტრაცია
        </button>
      </div>
    </div>
  );
}

export default Register;
