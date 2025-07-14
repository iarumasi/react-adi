import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProductList from './pages/ProductList';
import ProductForm from './pages/ProductForm';
import Cart from './pages/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container mt-4">
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4 rounded px-3">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/register">რეგისტრაცია</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">ავტორიზაცია</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">შიდა გვერდი</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">პროდუქტები</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">კალათა</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products-add" element={<ProductForm />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
