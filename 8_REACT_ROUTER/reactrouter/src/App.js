import "./App.css";

//1- config react router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";
import SearchForm from "./components/SearchForm";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        {/* 2- LINKS COM REACT ROUTER */}
        <Navbar />
        {/*9 - Search */}
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/*6 - NESTED ROUTES */}
          <Route path="/products/:id/info" element={<Info />} />
          {/*4 -ROTA DINAMICA */}
          <Route path="/products/:id" element={<Product />} />
          {/* 9 - Search */}
          <Route path="/search" element={<Search />} />
          {/* 10 - Redirect */}
          <Route path="/Company" element={<Navigate to="/about" />} />
          {/* 7 - Error 404 match not found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
