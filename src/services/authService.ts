import { supabase } from '../lib/supabase' 

export const RegisterUser = async (
    email:string,
    password:string
) => {
    const { data, error } = await supabase.auth.signUp({
        email,
        password
    })

    if (error) {
        throw error
    }

    return data
}
