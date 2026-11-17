import { supabase } from "../lib/supabase"
import type { Session } from '@supabase/supabase-js';

interface IGetCurrentSession {
    session: Session | null
}

const GetCurrentSession = async (): Promise<IGetCurrentSession> => {
    try {
        const { data, error } = await supabase.auth.getSession();

        if (error) {
            throw error;
        }

        return {
            session: data.session
        };

    } catch (error) {
        console.error(error);
        throw error;
    }
};

const LoginWithGoogle = async (): Promise<void> => {
    try {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: "google"
        });

        if (error) {
            throw error;
        }

        console.log(data);
    }
    catch (error) {
        console.log(error);
    }
}

const SignOut = async () => {
    const item = await supabase.auth.signOut();

    return item;
}

export {
    LoginWithGoogle,
    GetCurrentSession,
    SignOut
}