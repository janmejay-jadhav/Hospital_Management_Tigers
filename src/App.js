

import './App.css';
import ResponsiveDrawer from "./components/Sidebar"
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/sidebar' element={<ResponsiveDrawer/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
