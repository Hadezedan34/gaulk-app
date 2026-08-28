import { View , useColorScheme , StyleSheet} from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'

const ThemedCard = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <View
     style={[ {backgroundColor: theme.uiBackground} ,styles.card,style]}
      {...props}
      
    />
  )
}

export default ThemedCard

const styles = StyleSheet.create({
  card: {
    padding: 10,
    borderRadius: 10,
    width: '30%',
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3.84,
    elevation: 5,
  }
})