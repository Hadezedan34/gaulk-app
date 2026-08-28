import {useContext} from 'react'
import {UserContexts} from '../contexts/UserContext'

export function useUser()
{
    const context = useContext(UserContexts);
    if (!context) {
        throw new Error("useUSER Must Be usd with UserProvider")
        
    }
    return context
}