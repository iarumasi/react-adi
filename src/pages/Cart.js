import { useState, useEffect } from "react";
import axios from "axios";

function Cart() {
  const [cart, setCart] = useState([]);

  const fetchCart = async () => {
    try {
      const res = await axios.get("https://warrior.ge/api/cart", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setCart(res.data);
    } catch (err) {
      console.error(err);
      alert("კალათის წამოღებისას დაფიქსირდა შეცდომა!");
    }
  };

  const handleRemoveFromCart= async(productId)=>{
    try{
        const res = await axios.delete('https://warrior.ge/api/cart/'+productId ,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              }
        } )
        fetchCart();
    }catch(err){
        alert("კალათის წაშლისას დაფიქსირდა შეცდომა!");
    }
  }

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">🛒 კალათა</h2>

      {cart.length === 0 ? (
        <div className="alert alert-info text-center">
          კალათა ცარიელია.
        </div>
      ) : (
        <div className="list-group">
          {cart.map((item) => (
            <div key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <h5 className="mb-1">{item.product.title}</h5>
                <small className="text-muted">
                  {item.product.price} ლარი × {item.quantity}
                </small>
              </div>
              <span className="badge bg-primary rounded-pill">
                {item.product.price * item.quantity} ₾
              </span>
              <button onClick={() => handleRemoveFromCart(item.id)}>წაშლა</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
