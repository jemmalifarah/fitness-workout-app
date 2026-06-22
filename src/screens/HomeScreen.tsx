import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }: any) => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Welcome Back! 👋</Text>
        <Text style={styles.subtitle}>Let's sculpt your body today</Text>
      </View>

      {/* Quick Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Ionicons name="flame" size={24} color="#FF6B6B" />
          <Text style={styles.statNumber}>0</Text>
          <Text style={styles.statLabel}>Calories</Text>
        </View>
        <View style={styles.statCard}>
          <Ionicons name="timer" size={24} color="#4ECDC4" />
          <Text style={styles.statNumber}>0</Text>
          <Text style={styles.statLabel}>Minutes</Text>
        </View>
        <View style={styles.statCard}>
          <Ionicons name="checkmark-circle" size={24} color="#95E1D3" />
          <Text style={styles.statNumber}>0</Text>
          <Text style={styles.statLabel}>Workouts</Text>
        </View>
      </View>

      {/* Featured Workout Categories */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Workout Categories</Text>
        
        <TouchableOpacity
          style={[styles.categoryCard, { backgroundColor: '#FFE5E5' }]}
          onPress={() => navigation.navigate('Workouts')}
        >
          <Ionicons name="body" size={32} color="#FF6B6B" />
          <View style={styles.categoryContent}>
            <Text style={styles.categoryName}>Posture Correction</Text>
            <Text style={styles.categoryDesc}>Fix your alignment</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#FF6B6B" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.categoryCard, { backgroundColor: '#E5F9F7' }]}
          onPress={() => navigation.navigate('Workouts')}
        >
          <Ionicons name="muscle" size={32} color="#4ECDC4" />
          <View style={styles.categoryContent}>
            <Text style={styles.categoryName}>Arm Toning</Text>
            <Text style={styles.categoryDesc}>Burn arm fat</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#4ECDC4" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.categoryCard, { backgroundColor: '#E5F5F3' }]}
          onPress={() => navigation.navigate('Workouts')}
        >
          <Ionicons name="leg" size={32} color="#95E1D3" />
          <View style={styles.categoryContent}>
            <Text style={styles.categoryName}>Thigh Shaping</Text>
            <Text style={styles.categoryDesc}>Reduce thigh fat</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#95E1D3" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.categoryCard, { backgroundColor: '#FFF4E5' }]}
          onPress={() => navigation.navigate('Workouts')}
        >
          <Ionicons name="fitness" size={32} color="#F7B731" />
          <View style={styles.categoryContent}>
            <Text style={styles.categoryName}>Full Body Sculpt</Text>
            <Text style={styles.categoryDesc}>Complete transformation</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#F7B731" />
        </TouchableOpacity>
      </View>

      {/* Tips Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Fitness Tips</Text>
        <View style={styles.tipCard}>
          <Ionicons name="lightbulb" size={24} color="#FF6B6B" />
          <Text style={styles.tipText}>
            Consistency is key! Start with easy workouts and gradually increase intensity.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#FF6B6B',
    paddingHorizontal: 20,
    paddingVertical: 30,
    paddingTop: 50,
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: -25,
    marginBottom: 20,
    zIndex: 10,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginHorizontal: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#999',
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  categoryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  categoryContent: {
    flex: 1,
    marginLeft: 15,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  categoryDesc: {
    fontSize: 12,
    color: '#999',
    marginTop: 3,
  },
  tipCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  tipText: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    marginLeft: 12,
    lineHeight: 20,
  },
});

export default HomeScreen;
