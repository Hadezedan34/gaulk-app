import { StyleSheet, Text, View ,Pressable, useColorScheme} from 'react-native'
import React from 'react'
import {Link, useRouter} from 'expo-router'
import { Colors } from '../../constants/Colors'
import { Route } from 'expo-router/build/Route'
import { useUser } from '../../hooks/useUser'
import ThemedView from '../../components/ThemedView'
import ThemedPressable from '../../components/ThemedPressable'
import ThemedText from '../../components/ThemedText'
import ThemedCard from '../../components/ThemedCard'
import Spacer from '../../components/Spacer'


const Profilepage = () => {
    const colorscheme = useColorScheme();
    const theme = Colors[colorscheme]
  const router = useRouter()
  const {Logout , user} = useUser()
  


  const handleLogout = async () => {
    await Logout()
    router.replace('/')
  }
  return (
    
    <ThemedView style={styles.container }>
        <ThemedText style={{fontSize:20 , fontWeight:'bold'}}> Your Email : {user?.email}</ThemedText>
        <Spacer/>
      <Text style={styles.title }>Your Profile</Text>


    <Link href="/" asChild>
     
        <Text style={styles.Abouttext} >Home</Text>
     
    </Link>
    <ThemedPressable onPress={handleLogout}>
      <ThemedText> Log Out</ThemedText>
     
    </ThemedPressable> 

  
     
 
    </ThemedView>


    
  )
}

export default Profilepage;

const styles = StyleSheet.create({
     container: {
    flex: 1, 
   
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'times', // Explicit font family
    fontSize: 24,
    
    fontWeight: 'bold',
    color: '#1babcb',
  },
  Abouttext: {
    display: 'flex',
    fontFamily: 'times', // Explicit font family
    fontSize: 24,
    fontWeight: 'bold',
    color: '#d4d4dd',
    marginVertical: 20,
    borderBottomWidth: 1,
  }
})