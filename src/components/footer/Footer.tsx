import { GithubLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react'
import { type ReactNode, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

function Footer() {

    let data = new Date().getFullYear()

    const { usuario } = useContext(AuthContext)

    let component: ReactNode

    if (usuario.token !== "") {

        component = (

           <div className="w-full flex justify-center bg-sky-900 text-sky-100">
                <div className="container flex flex-col items-center py-4">
                    <p className="text-xl font-bold">
                        Blog Pessoal Vinícius Cristhian | Copyright: {data}
                    </p>
                    <p className="text-lg">Acesse minhas redes sociais</p>
                    <div className="flex gap-2">
                        <a href="https://github.com/ViniCristhian" target="_blank">
                            <GithubLogoIcon size={48} weight="bold" />
                        </a>

                        <a href="https://www.linkedin.com/in/vinicristhian/" target="_blank">
                            <LinkedinLogoIcon size={48} weight="bold" />
                        </a>
                    </div>
                </div>
            </div>

        )
    }
    return (
        <>
            { component }
        </>
    )
}

export default Footer