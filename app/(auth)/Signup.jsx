import { StyleSheet, Text, View ,Pressable, useColorScheme,Keyboard, TouchableWithoutFeedback} from 'react-native'
import React from 'react'
import {Link, router} from 'expo-router'
import { Colors } from '../../constants/Colors'
import ThemedView from '../../components/ThemedView'

import Spacer from '../../components/Spacer'
import ThemedTextInput from '../../components/ThemedTextInput'
import ThemedPressable from '../../components/ThemedPressable'
import { Route } from 'expo-router/build/Route'
import { useState } from 'react'
import { useUser } from '../../hooks/useUser'


const SignUp = () => {
    const colorscheme = useColorScheme();
    const theme = Colors[colorscheme]
      const [email , setEmail] = useState('');
      const [password , setPass] = useState('');
      const[error,setError]= useState(null);

      const { Register} = useUser()

       const handleSumbit = async () => {
        setError(null)
        try {
            await Register(email,password)
          
            router.replace('/Signin')
           
           
        } catch (error) {
          setError(error.message)
        }
    
    } 
 
  return (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <ThemedView style={styles.container }>
       <Text style={[styles.title , {fontFamily:'times', fontSize:40 , fontWeight:'bold' ,color:'white',marginBottom:'20'}]}>Create Your Account</Text>
      <Spacer />
      
      <ThemedTextInput style={{width:'80%' , marginBottom:20}} placeholder='Emai' keyboardType="email-address" value={email} 
       onChangeText={setEmail} />
        
   
      <ThemedTextInput style={{width:'80%' , marginBottom:20}} secureTextEntry value={password}  onChangeText={setPass} placeholder='PassWord' />
        
   

      
      <ThemedPressable style={{ width:'60%'}} onPress = {handleSumbit}>
       
         <Text style = {{fontSize:30 , textAlign:'center',fontWeight:'bold'}}>
            Sign UP
          </Text>
      </ThemedPressable>
     
    
        <Spacer/>
        {error && <Text style={styles.erro1} >{error}</Text>}
           
    </ThemedView>
    
</TouchableWithoutFeedback>  
    
  )
}

export default SignUp;

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
    color: '#271bcb',
    marginVertical: 20,
    borderBottomWidth: 1,
  },
  erro1:
  {
    color: Colors.warning,
    padding:10,
    backgroundColor:'#f5c1c8',
    marginHorizontal:10,
    borderRadius:6,
    borderWidth:1,
    borderColor:Colors.warning

  }
})