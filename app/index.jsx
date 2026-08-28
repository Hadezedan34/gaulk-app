import { StyleSheet, Text, View, Image ,useColorScheme, ActivityIndicator} from 'react-native';
import React from 'react';
import Logo from '../assets/SUN.png';
import { Link } from 'expo-router';
import ThemedView from '../components/ThemedView';
import { Colors } from '../constants/Colors';
import Lightpic from '../assets/SUN.png';
import Darkpic from '../assets/MOON.png';
import ThemedText from '../components/ThemedText';
import Spacer from '../components/Spacer';
import ThemedCard from '../components/ThemedCard';
import ThemedPressable from '../components/ThemedPressable';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-url-polyfill/auto';
import { TextInput } from 'react-native';
import ThemedLoading from '../components/ThemedLoading';




const Home = () => {
  const colorScheme = useColorScheme();
  const Logosource = colorScheme === 'dark' ? Darkpic : Lightpic;
  
  
  return (
    <SafeAreaProvider >
    <ThemedView style={styles.container}>
      <ThemedText title={true} style={[styles.title, {fontSize:30 , fontFamily:'inter', fontWeight:'bold' , marginBottom:100}]}>
        Welcome to the App
      </ThemedText>
      <View style={styles.image}>
        <Image style={styles.Logo} source={Logosource} alt="this is an image" />
      </View>


      <ThemedText style={styles.title} title={true}>
        The First
      </ThemedText>
    <Spacer />

  <ThemedCard style={{marginTop:20 , marginBottom:20, width:'80%' , shadowColor:'#000', shadowOffset:{width:0 , height:2}, shadowOpacity:0.25, shadowRadius:3.84, elevation:5}}>
      <ThemedText title={false} style={styles.title } >
        
        <Link href="/(auth)/Signin" style={styles.Abouttext}> 
                Sign In 
        </Link>
      </ThemedText>
  </ThemedCard>

    <ThemedCard style={{marginTop:20 , marginBottom:20, width:'80%' , shadowColor:'#000', shadowOffset:{width:0 , height:2}, shadowOpacity:0.25, shadowRadius:3.84, elevation:5}}>
      <ThemedText title={false} style={styles.title } >
    
      <Link href="/(auth)/Signup" style={styles.Abouttext}>

        Sign Up

      </Link>
       </ThemedText>
  </ThemedCard>
  <ThemedCard style={{marginTop:20 , marginBottom:20, width:'80%'  , shadowColor:'#000', shadowOffset:{width:0 , height:2}, shadowOpacity:0.25, shadowRadius:3.84, elevation:5}}>
  <Link href="/create" style={styles.Abouttext}>
  
    <ThemedText>
        Dashboard
    </ThemedText>  
      </Link>
  </ThemedCard>
    </ThemedView>
 
    </SafeAreaProvider>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'times',
    fontSize: 24,
    fontWeight: 'bold',
  
  },
  image: {
    width: 250,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
    marginBottom: 20,
  },
  Abouttext: {
    textAlign: 'center',
    display: 'flex',
    fontFamily: 'times',
    fontSize: 24,
    fontWeight: 'bold',
  
    marginVertical: 20,
    borderBottomWidth: 1,
  },
  Logo:{
    borderRadius: 20,
    height: 120,
    width: 120,
  
  }
});
