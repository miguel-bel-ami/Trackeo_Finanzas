import { useState } from "react"
import { LoginButton, LoginInput, GooogleLoginButton, FortgotPasswordButton } from '../components/LoginForm'
import { LoginWithGoogle, SignOut } from "../auth/LoginForm"
import styles from "../services/styles/LoginForm.module.css"
// import { useAuth } from '../context/AuthContext'

function Login() {
    const [Correo, setCorreo] = useState<string>("")
    const [Contraseña, setContraseña] = useState<string>("")
    // const { user, session, loading } = useAuth();

    const printMensaje = (e:any, id:string):any => {
        if (id === "txtUser") setCorreo(e.target.value)
        else setContraseña(e.target.value)
    }

    const DatosUsuario = ():void => {
        // console.log({
        //     user, session, loading
        // });
        // SignOut();
    }

    return (
        <>
            <div className={styles.LogForm}>
                <img className={styles.logo} src="/wallet-icon.png" alt="Mi Gastos" />
                <h1 className={styles.TituloApp}>
                    <span className={styles.TituloBlanco}>Track</span>
                    <span className={styles.TituloVerde}>Finanzas</span>
                </h1>
                <LoginInput 
                    placeHolder='Ingresa tu correo' 
                    id='txtUser' 
                    className={styles.txtUser}
                    OnChange={printMensaje}
                />
                <LoginInput 
                    placeHolder='Ingresa tu contraseña' 
                    id='txtPassword' 
                    className={styles.txtPassword}
                    OnChange={printMensaje}
                />
                <FortgotPasswordButton className={styles.btnForgotPassword}/>
                <LoginButton className={styles.BtnLogin} OnClick={DatosUsuario}/>
                <GooogleLoginButton className={styles.BtnGoogleLogin} OnClick={LoginWithGoogle} />
            </div>
        </>
    )
}

export default Login