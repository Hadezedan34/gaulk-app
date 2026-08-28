import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'react-native'
import { StackScreen } from 'react-native-screens'
import { useUser } from '../../hooks/useUser'
import GuestOnly from '../../components/auth/GuestOnly'

export default function AuthLayout() 
{
  const {user } = useUser()

  return (
    <GuestOnly>
        <Stack  screenOptions={{
                headerShown: false,
                animation: 'none',
            }}>
         
      
          

        </Stack>


    </GuestOnly>

  )
}

