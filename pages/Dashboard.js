import { useState, useEffect } from 'react';
import axios from 'axios';


const handleLogout = async () => {
    const token = localStorage.getItem('token');

    try{
        await axios.post('https://warrior.ge/api/logout', {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        localStorage.removeItem('token');
        alert('გამოსვლა წარმატებულია!')
    }catch(err){
        alert('დაფიქსირდა შეცდომა გამოსვლისას!')
    }
}

function Dashboard(){

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
    
    return(
        <div>
            <h2>შიდა გვერდი</h2>
            <p>{message}</p>
            <button onClick={handleLogout}>გამოსვლა</button>
        </div>
    )
}

export default Dashboard;