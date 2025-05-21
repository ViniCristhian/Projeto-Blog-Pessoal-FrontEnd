import { Link } from "react-router-dom"


function Navbar() {
    return (
        <>
            <div className="w-full flex justify-center py-4 bg-sky-900 text-white">
                <div className="container flex justify-between text-lg">
                    <Link to="/home" className="text-2xl font-bold"> Blog Pessoal</Link>

                    <div className="flex gap-4">
                        <Link to="/" className="">Postagens</Link>
                        <Link to="/" className="">Temas</Link>
                        <Link to="/">Cadastrar tema</Link>
                        <Link to="/" className="">Perfil</Link>
                        <Link to="/" className="">Sair</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
