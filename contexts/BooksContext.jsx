import { View, Text  } from 'react-native'
import { createContext , useEffect, useState} from 'react'
import React from 'react'
import { databases } from '../lib/appwrite'
import UserOnly from '../components/auth/UserOnly'
import { ID, Permission, Query, Role } from 'react-native-appwrite'
import { useUser } from '../hooks/useUser'



const DATABASE_iD = '6a92159e00233522de02'
const COLLECTION_iD = 'books'

export const BooksContext = createContext() 
 
export function BooksProvider({children})
{
    const [books , setBooks] = useState([])
    const { user } = useUser()

    async function fetchbooks() {
        try {
            const response = await databases.listDocuments(
                DATABASE_iD,
                COLLECTION_iD,
                [
                    Query.equal('userid', user.$id)
                ]
            )

            setBooks(response.documents)
            console.log(response.documents)
        } catch (error) {
            console.log(error)
        }
        
    }
    async function fetchbookbyid() {
        try {
            
        } catch (error) {
            console.log(error.message)
        }
        
    }
    async function createbook(data) {
        try {
            const newBook = await databases.createDocument(
                DATABASE_iD,
                COLLECTION_iD,
                ID.unique(),
                {...data,userid: user.$id },
                [
                    Permission.read(Role.user(user.$id)),
                    Permission.update(Role.user(user.$id)),
                    Permission.delete(Role.user(user.$id)),
                ]
            )
            
        } catch (error) {
            console.log(error.message)
        }
        
    }
    async function deletebook(id) {
        try {
            
        } catch (error) {
            console.log(error.message)
        }
        

        
    }

    useEffect(() => {
            if(user)
                {
                    fetchbooks()
                }else
                    {
                        setBooks([])
                    }

    },[user])
    return(
        <BooksContext.Provider value={{books, fetchbookbyid , deletebook , createbook, fetchbookbyid}}>
            {children}
        </BooksContext.Provider>
    )
} 




