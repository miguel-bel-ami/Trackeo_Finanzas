import { User, LogOut, Cog } from "lucide-react";
import { useEffect, useState } from "react";
import styles from "../services/styles/Dashboards.module.css"
import { SignOut } from "../auth/LoginForm"
import { useAuth } from "../context/AuthContext";


interface IUserButton {
    className: string,
    onClick: () => void;
}

const UserButton = ({ className, onClick }: IUserButton) => {
    const { user } = useAuth();
    const email = user?.email ?? null;

    return (
        <>
            <div className={styles.DivUserButton} onClick={onClick}>
                <User size={20} className={styles.IconoUser}></User>
                <button className={className}>{email}</button>
            </div>
        </>
    );
}

interface IToolbarUser {
    active: boolean
}

const ToolbarUser = ({ active = false }: IToolbarUser) => {
    const LogOutSession = () => {
        SignOut();
    }

    return (
        <>
            {active &&
                <div className={styles.ToolbarUser} >
                    <button className={styles.OpcionesButton}><Cog size={15} className={styles.IconCog}></Cog> Opciones</button>
                    <div onClick={LogOutSession}>
                        <button className={styles.CerrarSesionButton}><LogOut size={15} className={styles.IconLogOut}></LogOut> Cerrar sesión</button>
                    </div>
                </div>
            }
        </>
    )
}

export {
    UserButton,
    ToolbarUser
}