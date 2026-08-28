import React from 'react';
import { View, Text, useColorScheme  } from 'react-native';
import { Colors } from '../constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';

const ThemedView = ({style , ...props}) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <SafeAreaView style={[{ backgroundColor: theme.background , Text:theme.text }, style]}
    {...props}
    />
     
    
  );
};

export default ThemedView;