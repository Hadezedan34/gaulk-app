import { Keyboard,StyleSheet, Text, View ,Pressable, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import {Link} from 'expo-router'
import Spacer from '../../components/Spacer'
import ThemedView from '../../components/ThemedView'
import ThemedCard from '../../components/ThemedCard'
import ThemedPressable from '../../components/ThemedPressable'
import ThemedText from '../../components/ThemedText'
import { TextInput } from 'react-native'
import ThemedTextInput from '../../components/ThemedTextInput'
import { useState } from 'react'
import { useUser } from '../../hooks/useUser'
import { UserContexts } from '../../contexts/UserContext'
import { Colors } from '../../constants/Colors'

const SignIn = () => {
  const [email , setEmail] = useState('');
  const [password , setPass] = useState('');
  const[error,setError]= useState(null);
  const {login} = useUser();
  const handleSumbit = async () => {
    setError(null)
      try {
        await login(email, password)

        
      } catch (error) {
         setError(error.message)
        
      }
    

    } 
 
  return (

  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>  
    <ThemedView style={styles.container}>
      
      <Text style={[styles.title , {fontFamily:'times', fontSize:30 , fontWeight:'bold' ,color:'white'}]}>Login In To Your Account</Text>
      <Spacer />
      
      <ThemedTextInput style={{width:'80%' , marginBottom:20}} placeholder='Emai' keyboardType="email-address" value={email} 
       onChangeText={setEmail} />
        
   
      <ThemedTextInput style={{width:'80%' , marginBottom:20}} secureTextEntry value={password}  onChangeText={setPass} placeholder='PassWord' />
        
   

      
      <ThemedPressable style={{ width:'60%'}} onPress = {handleSumbit}>
       
         <Text style = {{fontSize:30 , textAlign:'center',fontWeight:'bold'}}>
            Sign In
          </Text>
      </ThemedPressable>
     
    
 
    
    </ThemedView>

  </TouchableWithoutFeedback>  
  )
}

export default SignIn;

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
    color: '#776161',
    marginVertical: 20,
    borderBottomWidth: 1,
  },
  btn: {
    
    paddingVertical: 10,
  },
  pressed: {
    opacity: 0.5,
  },
  Card: {marginTop:20 , marginBottom:20, width:'80%' , shadowColor:'#000', shadowOffset:{width:0 , height:2}, shadowOpacity:0.25, shadowRadius:3.84, elevation:5
},  erro1:
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