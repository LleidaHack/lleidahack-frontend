import {React, useState, useEffect} from "react";

const LoginForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    
    function submitDatas() {
        if (!isLoading){
            setIsLoading(true)
            const email = document.querySelector('input[type="email"]').value
            const password = document.querySelector('input[type="password"]').value
            
            //Enviar email i password al backend
            //Si el backend retorna un token, guardar-lo a localStorage i redirigir a pagina de admin amb les dades de usuari i els apartats als que pot accedir
        }
    }

    return (
        <div>
            <div className="flex flex-col p-10">
                <h1 className="text-3xl font-bold text-center text-white">Inicia sessió com a LleidaHacker</h1>
                <form className="flex flex-col space-y-4 mt-4">
                    <input type="email" placeholder="Email" className="rounded-md border border-gray-300 p-2" />
                    <input type="password" placeholder="Contrasenya" className="rounded-md border border-gray-300 p-2" />
                    <div onClick={submitDatas} className="bg-primary font-bold text-center text-white rounded-md p-2 cursor-pointer">Iniciar sessió</div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;