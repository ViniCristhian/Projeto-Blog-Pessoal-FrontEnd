import { createContext, useState, type ReactNode } from "react"
import { login } from "../services/Service"
import type UsuarioLogin from "../model/UsuarioLogin"

interface AuthContextProps {
    usuario: UsuarioLogin
    handleLogout(): void
    handleLogin(usuario: UsuarioLogin): Promise<void>
    estaCarregando: boolean
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {

    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        token: ""
    })

    const [estaCarregando, setEstaCarregando] = useState(false);

    async function handleLogin(usuarioLogin: UsuarioLogin) {
        setEstaCarregando(true);
        try {
            await login(`/usuarios/logar`, usuarioLogin, setUsuario);
            alert("O Usuário foi autenticado com sucesso!");
        } catch (error) {
            alert("Os Dados do usuário estão inconsistentes!");
        }
        setEstaCarregando(false);
    }

    function handleLogout() {
        setUsuario({
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: "",
            token: ""
        })
    }

    return (
        <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, estaCarregando }}>
            {children}
        </AuthContext.Provider>
    )
}