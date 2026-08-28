import { StyleSheet, Text, View ,useColorScheme} from 'react-native'
import React from 'react'
import { Stack} from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context' 
import { Colors } from '../constants/Colors'
import { StatusBar } from 'expo-status-bar'
import {UserProvider} from '../contexts/UserContext'

const RootLayout = () => {
    const colorScheme = useColorScheme(); // Detects light or dark mode
   
    const theme = Colors[colorScheme]  // Selects the appropriate theme
  
  return (
  <UserProvider>
    {/* SafeAreaView handles phone notches across iPhone and Android automatically */}
    <SafeAreaView style={styles.mainLayout}>
      
    <StatusBar style="auto" />
      {/* This container wraps the page content and forces the footer downward */}
      <View style={styles.pageBody}>
        <Stack  screenOptions={{headerStyle:{backgroundColor: theme.navBackground}
        , headerTintColor:theme.title
    
        }} >
            <Stack.Screen name="(auth)" options={{ headerShown: false }}/>
            <Stack.Screen name="(dashboard)" options={{ headerShown: false }}/>
            <Stack.Screen name="index" options={{title:"Home"}}/>
           
        </Stack>
      </View>
      
    

    </SafeAreaView>
  </UserProvider>
  )
}

export default RootLayout

const styles = StyleSheet.create({
  mainLayout: {
    flex: 1, // 💡 Fixed: Plain number 1 without quotation marks
    backgroundColor: '#ddd', 
  },
  pageBody: {
    flex: 1, // Takes up all remaining screen room, pushing footer to absolute bottom
  },
  footer: {
    height: 50,
    backgroundColor: '#7d7d86', // Using your dark blue accent color
    justifyContent: 'center',    // Centers text top-to-bottom ↕️
    alignItems: 'center',        // Centers text left-to-right ↔️
  },
  footerText: {
    color: '#ffffff',
    fontWeight: 'bold',
  }
})
