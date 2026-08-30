import { StyleSheet, Text, View, Pressable, useColorScheme, FlatList, StatusBar } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import { Colors } from '../../constants/Colors'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import { useBooks } from '../../hooks/useBooks'
import ThemedCard from '../../components/ThemedCard'
import { Route } from 'expo-router/build/Route'

const Bookspage = () => {
    const colorscheme = useColorScheme();
    const theme = Colors[colorscheme]
     const { books } = useBooks()
    const handleDescription =  () =>
      {
         
          
           
             router.replace("/bookinfo")      
          
      }
   

  return (
    <ThemedView style={styles.container}>
      <StatusBar barStyle="auto" />
        
      <Text style={styles.headerTitle}>Browse  Books</Text>
      
      <Link href="/" asChild>
        <Text style={styles.Abouttext}>Home</Text>
      </Link>

      <FlatList
        data={books} 
        keyExtractor={(item) => item.$id} 
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Pressable onPress={() => router.push({ pathname: '/bookinfo', params: { id: item.$id } })}>
            <ThemedCard style={styles.card}>
              <ThemedText style={styles.cardTitle}>{item.title}</ThemedText>
              <ThemedText style={styles.cardAuthor}>Written By {item.author}</ThemedText>
            </ThemedCard>
          </Pressable>
        )}
      />
    </ThemedView>
  )
}

export default Bookspage;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#1babcb',
    marginTop: 20,
  },
  Abouttext: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f8eff4',
    marginVertical: 20,
    borderBottomWidth: 1,
  },
  list: {
    marginTop: 40,
    width: '100%',
  },
  card: {
    width: '90%',
    marginHorizontal: "5%",
    marginVertical: 10,
    padding: 10,
    paddingLeft: 14,
    borderLeftColor: Colors.primary,
    borderLeftWidth: 4,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardAuthor: {
    fontSize: 16,
    color: '#aaa',
  }
})