import Form from "./Components/Form/Form";
import Home from "./Components/Home/Home";
import { NavBar } from "./Components/NavBar/NavBar"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/abm/:id" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
