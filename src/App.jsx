import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Contact from "./pages/Contact";
import Products from "./pages/Product";
import "./App.css";
import ProductDetails from "./pages/ProductDetails";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/products" element={<Products />}>
              <Route path=":productId" element={<ProductDetails />} />
            </Route>

            <Route path="/register" element={<Register />} />

            <Route
              path="*"
              element={
                <div className="page">
                  <h1>404-Page not found</h1>
                  <p> The page you're looking for does not exist</p>
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
