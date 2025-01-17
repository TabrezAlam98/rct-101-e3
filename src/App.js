import "./App.css";
import { Navbar }  from "./components/Navbar";
import { Routes, Route } from "react-router-dom"; 
import Home from "./pages/Home";
import Login from "./pages/Login";

import { Products } from "./components/Products";

  
function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Routes>
      <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/products/*" element={<Products/>}> </Route>
      </Routes>
      
    </div>
  );
}

export default App;