import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer.tsx";
import Navbar from "./components/navbar/Navbar.tsx";
import Home from "./pages/home/Home.tsx";
import Cadastro from "./pages/cadastro/Cadastro.tsx";
import Login from "./pages/login/Login.tsx";

function App() {
  return (
    <>
      <BrowserRouter>

        <Navbar />

        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>

        <Footer />

      </BrowserRouter>
    </>
  )
}

export default App