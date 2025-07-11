import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ProductList from './pages/ProductList'
import ProductForm from './pages/ProductForm'

function App(){
    return(
        <BrowserRouter>
            <h2>მთავარი გვერდი</h2>
            <nav>
                <Link to="/register">რეგისტრაცია</Link> | {' '}
                <Link to="/login">ავტორიზაცია</Link> | {' '}
                <Link to="/dashboard">შიდა გვერდი</Link> | {' '}
                <Link to="/products">პროდუქტები</Link> | {' '}
                <Link to="/products-add">პროდუქტის დამატება</Link>
            </nav>
            <hr/>
            <Routes>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/dashboard" element={<Dashboard />}></Route>
                <Route path="/products" element={<ProductList />}></Route>
                <Route path="/products-add" element={<ProductForm />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;