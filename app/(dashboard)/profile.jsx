import { StyleSheet, Text, View, Pressable, useColorScheme } from 'react-native'
import React from 'react'
import { Link, useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors'
import { Route } from 'expo-router/build/Route'
import { useUser } from '../../hooks/useUser'
import ThemedView from '../../components/ThemedView'
import ThemedPressable from '../../components/ThemedPressable'
import ThemedText from '../../components/ThemedText'
import ThemedCard from '../../components/ThemedCard'
import Spacer from '../../components/Spacer'

const Profilepage = () => {
  const colorscheme = useColorScheme();
  const theme = Colors[colorscheme]
  const router = useRouter()
  const { Logout, user } = useUser()

  const handleLogout = async () => {
    await Logout()
    router.replace('/')
  }

  return (
    <ThemedView style={styles.container}>
      <Text style={styles.title}>Your Profile</Text>
      
      <Spacer height={20} />

      {/* User Information Card */}
      <ThemedCard style={styles.card}>
        <ThemedText style={styles.label}>Account Email</ThemedText>
        <ThemedText style={styles.emailText}>
          {user?.email || 'Not logged in'}
        </ThemedText>
      </ThemedCard>

      <Spacer height={30} />

      {/* Logout Action Button */}
      <ThemedPressable style={styles.logoutButton} onPress={handleLogout}>
        <ThemedText style={styles.logoutText}>Log Out</ThemedText>
      </ThemedPressable>

      <Spacer height={15} />

      {/* Navigation Link */}
      <Link href="/" asChild>
        <Pressable style={styles.homeButton}>
          <Text style={styles.Abouttext}>← Back to Home</Text>
        </Pressable>
      </Link>
    </ThemedView>
  )
}

export default Profilepage;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: 'times',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1babcb',
  },
  card: {
    width: '100%',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    opacity: 0.7,
    marginBottom: 6,
  },
  emailText: {
    fontSize: 18, 
    fontWeight: 'bold',
  },
  logoutButton: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#e74c3c',
  },
  logoutText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  homeButton: {
    paddingVertical: 10,
  },
  Abouttext: {
    fontFamily: 'times',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#d4d4dd',
  }
})