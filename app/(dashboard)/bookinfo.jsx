import React from 'react'
import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { useBooks } from '../../hooks/useBooks'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'

const BookInfo = () => {
  const { id } = useLocalSearchParams()
  const { books } = useBooks()
  const router = useRouter()

  const selectedBook = books.find((b) => String(b.$id) === String(id))

  if (!selectedBook) {
    return (
      <ThemedView style={styles.errorContainer}>
        <Text style={styles.errorEmoji}>📚</Text>
        <ThemedText style={styles.errorTitle}>Book Not Found</ThemedText>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backButtonText}>← Go Back</Text>
        </Pressable>
      </ThemedView>
    )
  }

  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Top Navigation */}
        <Pressable style={styles.navBack} onPress={() => router.back()}>
          <Text style={styles.navBackText}>← Back</Text>
        </Pressable>

        {/* Hero Card */}
        <View style={styles.heroCard}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Book Details</Text>
          </View>
          <ThemedText style={styles.title}>{selectedBook.title}</ThemedText>
          <Text style={styles.author}>Written by {selectedBook.author}</Text>
        </View>

        {/* Content Section */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Description</Text>
          <View style={styles.descriptionBox}>
            <Text style={styles.description}>
              {selectedBook.description || 'No description provided for this book.'}
            </Text>
          </View>
        </View>

        {/* Metadata Footer Card */}
        <View style={styles.metaCard}>
          <Text style={styles.metaLabel}>Document ID</Text>
          <Text style={styles.metaValue}>{selectedBook.$id}</Text>
        </View>
      </ScrollView>
    </ThemedView>
  )
}

export default BookInfo

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingTop: 60,
  },
  navBack: {
    alignSelf: 'flex-start',
    marginBottom: 20,
    paddingVertical: 8,
    paddingHorizontal: 14,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 20,
  },
  navBackText: {
    color: '#1babcb',
    fontWeight: '600',
    fontSize: 14,
  },
  heroCard: {
    backgroundColor: '#1E2638',
    borderRadius: 16,
    padding: 24,
    marginBottom: 20,
    borderLeftWidth: 5,
    borderLeftColor: '#1babcb',
  },
  badge: {
    backgroundColor: 'rgba(27, 171, 203, 0.15)',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    marginBottom: 12,
  },
  badgeText: {
    color: '#1babcb',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 6,
  },
  author: {
    fontSize: 16,
    color: '#A0AEC0',
    fontWeight: '500',
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: '700',
    color: '#E2E8F0',
    marginBottom: 10,
  },
  descriptionBox: {
    backgroundColor: '#171923',
    padding: 18,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#2D3748',
  },
  description: {
    fontSize: 15,
    color: '#CBD5E0',
    lineHeight: 24,
  },
  metaCard: {
    backgroundColor: '#171923',
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2D3748',
  },
  metaLabel: {
    color: '#718096',
    fontSize: 13,
    fontWeight: '600',
  },
  metaValue: {
    color: '#E2E8F0',
    fontSize: 13,
    fontFamily: 'monospace',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorEmoji: {
    fontSize: 48,
    marginBottom: 12,
  },
  errorTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: '#1babcb',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  backButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
})