import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Single from "./pages/Single";
import PageNotFound from "./pages/PageNotFound";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/single" element={<Single/>}/>
        <Route path="/*"  element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
