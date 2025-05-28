import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {

    const navegar = useNavigate();

    const { handleLogout } = useContext(AuthContext)

    function logout() {

        handleLogout()
        alert('O Usuário foi desconectado com sucesso!')
        navegar('/')
    }

    return (
        <>
            <div className="w-full flex justify-center py-4 bg-sky-900 text-sky-100">
                <div className="container flex justify-between text-lg">
                    <Link to="/home" className="text-2xl font-bold"> Blog Pessoal</Link>

                    <div className="flex gap-4">
                        <Link to="/postagens" className="hover:underline">Postagens</Link>
                        <Link to="/temas" className="hover:underline">Temas</Link>
                        <Link to="/cadastrartema" className="hover:underline">Cadastrar tema</Link>
                        <Link to="/login" className="hover:underline">Perfil</Link>
                        <Link to="" onClick={logout} className="hover:underline">Sair</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
