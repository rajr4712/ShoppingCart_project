import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import { Route } from "react-router-dom";
import Home from "./pages/Home"
import Cart from "./pages/Cart"

const App = () => {
  return (<div>
        <div className="bg-slate-900">
          <Navbar/>
        </div>
       
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />   {/*When item addED to cart to buy then by click on cart icon you go to that page */}
        </Routes>
  </div>)
};

export default App;
