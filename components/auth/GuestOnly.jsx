import { useRouter } from "expo-router"
import { useUser } from "../../hooks/useUser"
import { useEffect } from "react"
import { Text } from "react-native"
import ThemedLoading from "../ThemedLoading"

const GuestOnly =  ({children}) => {


const {user ,auth} = useUser()
const router = useRouter()

useEffect(() => {

 if (auth && user !== null) {
    router.replace('/profile')
 }
},[user,auth])

if ( !auth || user) {
    
    return (
   <ThemedLoading>Loading Please Wait!</ThemedLoading>
    )
}
return children
}
export default GuestOnly