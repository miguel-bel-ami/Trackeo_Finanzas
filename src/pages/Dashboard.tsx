import { useState, useEffect } from "react";
import { UserButton, ToolbarUser } from "../components/Dashboard";
import styles from "../services/styles/Dashboards.module.css";


function Dashboard() {
    const [activeToolbarUser, setActiveToolbarUser] = useState<boolean>(false);
    const [email, setEmail] = useState<string | null>("");

    const showToolbar = () => {
        setActiveToolbarUser(prev => !prev);
    }

    return (
        <>
            <div className={styles.Header}>
                <h1 className={styles.TituloApp}>
                    <span className={styles.TituloBlanco}>Track</span>
                    <span className={styles.TituloVerde}>Finanzas</span>
                </h1>
                <UserButton className={styles.UserButton} onClick={showToolbar}/>
            </div>
            <div className={styles.ToolbarUserContainer}>
                <ToolbarUser active={activeToolbarUser} />
            </div>

        </>
    );
}

export default Dashboard;