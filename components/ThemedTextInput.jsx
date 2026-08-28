import { View, Text, Pressable ,StyleSheet, TextInput ,useColorScheme} from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'

const ThemedTextInput = ({ style, ...props }) => {
    const usecolors = useColorScheme();
    const colors = Colors[usecolors]
  return (
      
            <TextInput style = {[styles.btn ,{ backgroundColor:colors.uiBackground , color:colors.text , padding:20},style  ]}
              {...props}/>
  )
}

export default ThemedTextInput
const styles = StyleSheet.create 
({
    btn: {
    
    
    
   
    borderRadius:6,
    marginVertical:10
        },
 
})