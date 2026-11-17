import { createContext, useState, useContext, useEffect } from 'react';
import type { ReactNode } from "react";
import type { Session, User } from '@supabase/supabase-js';
import { supabase } from "../lib/supabase";
import { GetCurrentSession } from "../auth/LoginForm";

interface IAuthContextType {
    session: Session | null;
    user: User | null;
    loading: boolean
};

const AuthContext = createContext<IAuthContextType | undefined>(undefined);

function AuthProvider({ children }: { children: ReactNode }) {
    const [session, setSession] = useState<Session | null>(null);
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getSession = async () => {
            try {
                const { session } = await GetCurrentSession();
                setSession(session);
                setUser(session?.user ?? null);
                setLoading(false);
            }
            catch (error) {
                console.log(error);
            }
        }

        getSession();
        // setSession(userSession.session)
    }, []);

    useEffect(() => {
        const { data: { subscription } } =
            supabase.auth.onAuthStateChange((event, session) => {
                setSession(session);
                setUser(session?.user ?? null)
            });

        return () => {
            subscription.unsubscribe();
        };
    }, []);

    return (
        <AuthContext.Provider value={{
            session,
            user,
            loading
        }}>
            {children}
        </AuthContext.Provider>
    )
};

const useAuth = () => {
    const context = useContext(AuthContext);

    if (context === undefined) {
        throw new Error('useAuth debe utilizarse dentro de AuthProvider');
    }

    return context;
};

export {
    AuthProvider,
    useAuth
};