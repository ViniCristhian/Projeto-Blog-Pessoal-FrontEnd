import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer.tsx";
import Navbar from "./components/navbar/Navbar.tsx";
import Home from "./pages/home/Home.tsx";
import Cadastro from "./pages/cadastro/Cadastro.tsx";
import Login from "./pages/login/Login.tsx";
import { AuthProvider } from "./contexts/AuthContext.tsx";
import ListaTemas from "./components/temas/listatemas/ListaTemas.tsx";
import FormTema from "./components/temas/formtema/FormTema.tsx";
import DeletarTema from "./components/temas/deletartema/DeletarTema.tsx";
import ListaPostagens from "./components/postagens/listapostagens/ListaPostagens.tsx";
import FormPostagem from "./components/postagens/formpostagem/FormPostagem.tsx";
import DeletarPostagem from "./components/postagens/deletarpostagem/DeletarPostagem.tsx";
import Perfil from "./pages/perfil/Perfil.tsx";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <AuthProvider>

        <ToastContainer />
        
        <BrowserRouter>

          <Navbar />

          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastrartema" element={<FormTema />} />
              <Route path="/editartema/:id" element={<FormTema />} />
              <Route path="/deletartema/:id" element={<DeletarTema />} />
              <Route path="/postagens" element={<ListaPostagens />} />
              <Route path="/cadastrarpostagem" element={<FormPostagem />} />
              <Route path="/editarpostagem/:id" element={<FormPostagem />} />
              <Route path="/deletarpostagem/:id" element={<DeletarPostagem />} />
              <Route path="/perfil" element={<Perfil />} />
            </Routes>
          </div>

          <Footer />

        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App