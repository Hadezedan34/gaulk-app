import { StyleSheet, Text, View ,Pressable, useColorScheme} from 'react-native'
import React from 'react'
import {Link} from 'expo-router'
import { Colors } from '../../constants/Colors'
import ThemedView from '../../components/ThemedView'
import { Route } from 'expo-router/build/Route'
import ThemedText from '../../components/ThemedText'


const Bookspage = () => {
    const colorscheme = useColorScheme();
    const theme = Colors[colorscheme]
 
  return (
    
    <ThemedView style={styles.container }>
      <Text style={styles.title }>Broswe Your Books</Text>
    <Link href="/" asChild>
     
        <Text style={styles.Abouttext }   >Home</Text>
     
    </Link>
    </ThemedView>
    

    
  )
}

export default Bookspage;

const styles = StyleSheet.create({
     container: {
    flex: 1, 
   
    justifyContent: '',
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
    color: '#f8eff4',
    marginVertical: 20,
    borderBottomWidth: 1,
  }
})