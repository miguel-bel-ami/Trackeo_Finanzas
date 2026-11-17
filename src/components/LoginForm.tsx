import { useState } from "react";

interface IInputLoginProps {
    placeHolder: string;
    id: string;
    className: string;
    OnChange: (e: any, id: string) => void
}

const LoginInput = ({ placeHolder, id, className, OnChange }: IInputLoginProps) => {
    return (
        <>
            <input 
                placeholder={placeHolder} 
                id={id} 
                className={className}
                onChange={(e) => OnChange(e, id)}
            ></input>
        </>
    )
}

interface IButtonLogin {
    className: string
    OnClick: () => void
}

const LoginButton = ({ className, OnClick }: IButtonLogin) => {
        return (
        <>
            <button id="btnIniciarSesion" onClick={OnClick} className={className}>Iniciar sesión</button>
        </>
    )
}

interface IGoogleLoginButton {
    className: string
    OnClick: () => void
}

const GooogleLoginButton = ({className, OnClick}: IGoogleLoginButton) => {

    return (
        <>
        <button
            className={className}
            onClick={OnClick}
        >
            <svg
                width="30"
                height="13.5"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.74 7.18l7.73 6C44.43 37.97 46.98 31.85 46.98 24.55z"/>
                <path fill="#FBBC05" d="M10.53 28.59a14.4 14.4 0 0 1 0-9.18l-7.98-6.19a23.9 23.9 0 0 0 0 21.56l7.98-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.91-5.8l-7.73-6c-2.15 1.45-4.92 2.3-8.18 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
            </svg>

            <span>Continuar con Google</span>
        </button>
        </>
    )
}

interface IForgotPasswordButton {
    className: string
}

const FortgotPasswordButton = ({className}: IForgotPasswordButton) => {

    return (
        <>
            <label className={className}>Olvidé mi contraseña</label>
        </>
    )
}

export {
    LoginButton
    , LoginInput
    , GooogleLoginButton
    , FortgotPasswordButton
}