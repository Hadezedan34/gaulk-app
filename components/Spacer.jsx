import { View , useColorScheme , StyleSheet} from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'

const Spacer = (style,...props) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <View
     style={[  styles.Spacex,style]}
      {...props}
      
    />
  )
}

export default Spacer

const styles = StyleSheet.create({
  Spacex: {
    padding: 10,
    
  }
})