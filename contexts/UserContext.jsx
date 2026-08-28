import { createContext, useState } from "react";
import { account } from "../lib/appwrite"
import { ID } from "react-native-appwrite";
import { useEffect } from "react";


export const UserContexts = createContext();

export function UserProvider({ children })
{
    const [user,setUser] = useState();
    const [auth,authChecked] = useState(false);

    async function login(email,password) {
        try {
            await account.createEmailPasswordSession(email, password);
            const response = await account.get();
            setUser(response);
            return response;
        } catch (error) {
            throw Error(error.message)
        }
    } 
    async function Register(email,password) {
        try {
            const response = await account.create(ID.unique(), email, password);
            await login(email,password)
           
        } catch (error) {
            throw Error(error.message)
        }
    } 
    async function Logout() {
        try {
            await account.deleteSession("current")
        setUser(null)
        } catch (error) {
            console.log(error.message)
            throw error
        }
    }

    async function getInitialUserValue() {
        try {
            const response =  await account.get()
            setUser(response)
        } catch (error) {
            setUser(null)
        }
        finally
        {
            authChecked(true)

        }
        
    }
    useEffect(() => {
        getInitialUserValue()
    }, [])

    return (
        <UserContexts.Provider value={{user,login,Register,Logout , auth}}>

            {children}

        </UserContexts.Provider>
    )

}
