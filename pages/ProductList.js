import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("asc");

  const fetchProducts = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("ტოკენი არ მოიძებნა!");
      return;
    }

    try {
      const res = await axios.get(`https://warrior.ge/api/products?page=${page}&sortBy=${sortBy}&order=${order}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProducts(res.data.data);
    } catch (err) {
      console.error(err);
      alert("პროდუქტების წამოღებისას დაფიქსირდა შეცდომა");
    }
  };

  const handleAddToCart = async (productID) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("ტოკენი არ მოიძებნა!");
      return;
    }

    try {
      await axios.post(
        "https://warrior.ge/api/cart",
        { product_id: productID },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("პროდუქტის კალათის დამატება წარმატებით!");
    } catch (err) {
      console.error(err);
      alert("კალათის დამატებისას დაფიქსირდა შეცდომა!");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page, sortBy, order]);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>პროდუქტები</h2>
        <Link className="btn btn-outline-success" to="/products-add">
          პროდუქტის დამატება
        </Link>

    <select onChange={(e) => setSortBy(e.target.value)}>
        <option value="">სორტირება</option>
        <option value="title">დასახელება</option>
        <option value="price">ფასი</option>
    </select>

    <select onChange={(e) => setOrder(e.target.value)}>
        <option value="asc">ა-ჰ</option>
        <option value="desc">ჰ-ა</option>
    </select>

      </div>

      {products.length === 0 ? (
        <div className="alert alert-warning text-center">
          პროდუქტები არ მოიძებნა.
        </div>
      ) : (
        <div className="row g-4">
          {products.map((product) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product.id}>
              <div className="card h-100 shadow-sm">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text text-muted">{product.description}</p>
                  <p className="card-text fw-bold mb-4">{product.price} ₾</p>
                  <button
                    onClick={() => handleAddToCart(product.id)}
                    className="btn btn-primary mt-auto"
                  >
                    კალათაში დამატება 🛒
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>წინა გვერდი</button>
      <button onClick={() => setPage(page + 1)}>შემდეგი გვერდი</button>
    </div>
  );
}

export default ProductList;
