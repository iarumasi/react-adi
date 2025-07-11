import { useState, useEffect } from "react";
import axios from "axios";

function ProductList(){

    const [products, setProducts] = useState([]);
    const token = localStorage.getItem('token');

    const fetchProducts = async () => {
        if(!token){
            alert('ტოკენი არ მოიძებნა!')
            return;
        }

        try{
            const res = await axios.get('https://warrior.ge/api/products', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setProducts(res.data);
            console.log(res.data);

        }catch(err){
            console.log(err);
            alert('პროდუქტების წამოღებისას დაფიქსირდა შეცდომა')
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return(
        <div>
            <h2>პროდუქტები</h2>
            {products.length === 0 ? (
                <p>პროდუქტები არ მოიძებნა.</p>
            ) : (
                <ul>
                    {products.map(product => (
                        <li key={product.id}>{product.title}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default ProductList;