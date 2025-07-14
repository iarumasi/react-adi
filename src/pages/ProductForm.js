import { useState } from "react";
import axios from "axios";

function ProductForm(){

const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [price, setPrice] = useState('');

const handleProduct = async () => {
    if(!title || !price){
        return;
    }

    try{
        const res = await axios.post('https://warrior.ge/api/products', {
            title,
            description,
            price,
        },{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        alert('პროდუქტის დამატება წარმატებით!');
    }catch(err){
        alert('პროდუქტის დამატებისას დაფიქსირდა შეცდომა!', err);
    }
}

    return(
        <div>
            <h2>პროდუქტის დამატება</h2>
            <input placeholder="პროდუქტის სახელი" onChange={(e) => setTitle(e.target.value)} value={title}/>
            <input placeholder="პროდუქტის აღწერა" onChange={(e) => setDescription(e.target.value)} value={description}/>
            <input placeholder="პროდუქტის ფასი" onChange={(e) => setPrice(e.target.value)} value={price}/>
            <button onClick={handleProduct}>პროდუქტის დამატება</button>
        </div>
    )
}

export default ProductForm;