import { useState, useEffect } from 'react';
import axios from 'axios';

const handleLogout = async () => {
  const token = localStorage.getItem('token');

  try {
    await axios.post('https://warrior.ge/api/logout', {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    localStorage.removeItem('token');
    alert('გამოსვლა წარმატებულია!');
  } catch (err) {
    alert('დაფიქსირდა შეცდომა გამოსვლისას!');
    console.error(err);
  }
};

function Dashboard() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');

    axios.get('https://warrior.ge/api/dashboard', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => setMessage(res.data.message))
      .catch(() => setMessage('ამ გვერდზე წვდომა არ გაქვს!'));
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
      <div className="card p-4 shadow-sm text-center" style={{ width: '100%', maxWidth: '500px' }}>
        <h3 className="mb-3">შიდა გვერდი</h3>
        <p className="mb-4">{message}</p>
        <button className="btn btn-danger w-100" onClick={handleLogout}>
          გამოსვლა
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
