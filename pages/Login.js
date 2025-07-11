import { useState } from 'react';
import axios from 'axios';

function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try{
            const res = await axios.post('https://warrior.ge/api/login', {
                email,
                password,
            });

            localStorage.setItem('token', res.data.token);
            alert('ავტორიზაცია დასრულდა წარმატებით!');
        }catch(err){
            alert('ავტორიზაციისას დაფიქსირდა შეცდომა!', err);
        }
    }

    return(
        <div>
            <h2>ავტორიზაცია</h2>

            <input
            type="email"
            placeholder="ელ.ფოსტა"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            ></input><br /><br />

            <input
            type="password"
            placeholder="პაროლი"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            ></input><br /><br />
            
            <button onClick={handleLogin}>შესვლა</button>

        </div>
    )
}

export default Login;