
import {useState} from 'react';
import axios from 'axios';
function Register(){

const [name, setName] = useState('');
const [email, setMail] = useState('');
const [password, setPass] = useState('');

    const handleRegister = async () => {
        try{
            const res = await axios.post('https://warrior.ge/api/register', {
                name,
                email,
                password,
            });
            alert('რეგისტრაცია დასრულდა წარმატებით!');
        } catch(err){
            alert('რეგისტრაციისას დაფიქსირდა შეცდომა!', err);
        }
    }

    return(
        <div>
            <h2>რეგისტრაცია</h2>

            <input
            type="text"
            placeholder="სახელი"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            ></input><br /><br />

            <input
            type="email"
            placeholder="ელ. ფოსტა"
            value={email}
            onChange={(e)=>setMail(e.target.value)}
            ></input><br /><br />

            <input
            type="password"
            placeholder="პაროლი"
            value={password}
            onChange={(e)=>setPass(e.target.value)}
            ></input><br /><br />

            <button onClick={handleRegister}>რეგისტრაცია</button>
            
        </div>
    )
}

export default Register;