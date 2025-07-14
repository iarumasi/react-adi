import { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post('https://warrior.ge/api/login', {
        email,
        password,
      });

      localStorage.setItem('token', res.data.token);
      alert('ავტორიზაცია დასრულდა წარმატებით!');
    } catch (err) {
      alert('ავტორიზაციისას დაფიქსირდა შეცდომა!');
      console.error(err);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '70vh' }}>
      <div className="card p-4 shadow-sm" style={{ width: '100%', maxWidth: '400px' }}>
        <h3 className="text-center mb-4">ავტორიზაცია</h3>

        <div className="mb-3">
          <label className="form-label">ელ. ფოსტა</label>
          <input
            type="email"
            className="form-control"
            placeholder="შეიყვანეთ ელ. ფოსტა"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">პაროლი</label>
          <input
            type="password"
            className="form-control"
            placeholder="შეიყვანეთ პაროლი"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="btn btn-primary w-100" onClick={handleLogin}>
          შესვლა
        </button>
      </div>
    </div>
  );
}

export default Login;
