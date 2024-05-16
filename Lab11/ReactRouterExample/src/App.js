import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {Home, ProductDetail, ProductList, Contact, Admin, NotFound} from './pages'

import { Header, Footer } from './components';

import './App.css';

function App() {
  const isAdmin = false;
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product" element={<ProductList />}></Route>
          <Route path="/product/:id" element={<ProductDetail />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/admin" element={isAdmin?<Admin />:<Navigate to="/" />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
      <Footer>FOOTER</Footer>
    </BrowserRouter>
  );
}

export default App;
