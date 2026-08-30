import { StyleSheet, Text, View, Pressable, useColorScheme, TextInput, ScrollView , TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Colors } from '../../constants/Colors'
import ThemedView from '../../components/ThemedView'
import { Route } from 'expo-router/build/Route'
import { useBooks } from '../../hooks/useBooks'
import { router } from 'expo-router'
import ThemedTextInput from '../../components/ThemedTextInput'
import { useState } from 'react'
import { useRouter } from 'expo-router'
import { BooksContext, BooksProvider } from '../../contexts/BooksContext'

const Createpage = () => {
    const colorscheme = useColorScheme();
    const theme = Colors[colorscheme]

    const[title,setTitle] = useState("")
    const[author,setAuthor] = useState("")
    const[description,setDescription] = useState("")
    const[loading,setLoading] = useState(false)
    const { createbook } = useBooks() 
    const router = useRouter()

    const handlesubmit = async () => 
      {
        if (!title.trim() || !author.trim || !description.trim()) return

        

          setLoading(true)

          await createbook({title , author , description})

          setAuthor('')
          setTitle('')
          setDescription('')

          //rederict
          router.replace('/books')
        console.log({title,author,description})
          setLoading(false)
      }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.formContainer}>
        <Text style={styles.title}>Create your book</Text>
        
        {/* Title Input */}
        <Text style={styles.label}>Book Title</Text>
        <ThemedTextInput 
          style={styles.input} 
          placeholder="Enter book title" 
          placeholderTextColor="#888" 
          value={title}
          onChangeText = {setTitle}
        />

        {/* Author Input */}
        <Text style={styles.label}>Author</Text>
        <ThemedTextInput 
          style={styles.input} 
          placeholder="Enter author name" 
          placeholderTextColor="#888" 
          value={author}
           onChangeText = {setAuthor}
        />

        {/* Description Input */}
        <Text style={styles.label}>Description</Text>
        <ThemedTextInput 
          style={[styles.input, styles.textArea]} 
          placeholder="Enter book description" 
          placeholderTextColor="#888" 
          multiline 
          value={description}
           onChangeText = {setDescription}
        />

        {/* Submit Button UI */}
        <Pressable style={styles.submitButton} onPress={handlesubmit} disabled={loading}>
         <Text style={styles.submitButtonText}>{loading ? "Saving..." : "Add Book"}</Text>
        </Pressable>

        {/* Navigation Link */}
        <Link href="/" asChild>
          <Pressable style={styles.homeButton}>
            <Text style={styles.Abouttext}>← Back to Home</Text>
          </Pressable>
        </Link>
      </ScrollView>
    </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default Createpage;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  formContainer: {
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'times',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1babcb',
    marginBottom: 24,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#dfddf6',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#1E1E2C',
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    color: '#fff',
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#333348',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#1babcb',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  homeButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  Abouttext: {
    fontFamily: 'times',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#dfddf6',
  }
})