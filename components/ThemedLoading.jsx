import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'
import { useColorScheme } from 'react-native'
import ThemedView from './ThemedView'



const ThemedLoading = () => {
const colorscheme = useColorScheme()
const theme = Colors[colorscheme] ?? Colors.light
 
  return (
    <ThemedView style={{
      flex:1,
      justifyContent:'center',
      alignItems:"center"
    }}>
    <ActivityIndicator size={'large'} color = {theme.text} />
      
  
    </ThemedView>
  )
}

export default ThemedLoading


