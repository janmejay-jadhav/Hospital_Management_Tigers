import './App.css';
import Register from "./pages/Register";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResponsiveDrawer from './components/Sidebar';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sidebar" element={<ResponsiveDrawer/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
