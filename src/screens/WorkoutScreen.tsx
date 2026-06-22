import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { workoutPrograms, exercisesData } from '../data/exercises';

const WorkoutScreen = ({ navigation }: any) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All', icon: 'fitness' },
    { id: 'posture', label: 'Posture', icon: 'body' },
    { id: 'arms', label: 'Arms', icon: 'muscle' },
    { id: 'thighs', label: 'Thighs', icon: 'leg' },
    { id: 'silhouette', label: 'Full Body', icon: 'heart' },
  ];

  const filteredWorkouts =
    selectedCategory === 'all'
      ? workoutPrograms
      : workoutPrograms.filter((w) => w.category === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return '#95E1D3';
      case 'Medium':
        return '#F7B731';
      case 'Hard':
        return '#FF6B6B';
      default:
        return '#999';
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Choose Your Workout</Text>
        <Text style={styles.subtitle}>Select a program to start exercising</Text>
      </View>

      {/* Category Filter */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryScroll}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryButton,
              selectedCategory === category.id && styles.categoryButtonActive,
            ]}
            onPress={() => setSelectedCategory(category.id)}
          >
            <Ionicons
              name={category.icon as any}
              size={20}
              color={
                selectedCategory === category.id ? '#fff' : '#FF6B6B'
              }
              style={{ marginRight: 5 }}
            />
            <Text
              style={[
                styles.categoryButtonText,
                selectedCategory === category.id &&
                  styles.categoryButtonTextActive,
              ]}
            >
              {category.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Workout Programs */}
      <View style={styles.programsContainer}>
        {filteredWorkouts.map((workout) => (
          <TouchableOpacity
            key={workout.id}
            style={styles.workoutCard}
            onPress={() =>
              navigation.navigate('ExerciseDetail', { workoutId: workout.id })
            }
          >
            <View style={styles.workoutCardHeader}>
              <View>
                <Text style={styles.workoutName}>{workout.name}</Text>
                <Text style={styles.workoutDesc}>{workout.description}</Text>
              </View>
              <View
                style={[
                  styles.difficultyBadge,
                  {
                    backgroundColor: getDifficultyColor(workout.difficulty),
                  },
                ]}
              >
                <Text style={styles.difficultyText}>{workout.difficulty}</Text>
              </View>
            </View>

            <View style={styles.workoutFooter}>
              <View style={styles.workoutStat}>
                <Ionicons name="timer" size={16} color="#FF6B6B" />
                <Text style={styles.workoutStatText}>
                  {workout.duration} min
                </Text>
              </View>
              <View style={styles.workoutStat}>
                <Ionicons name="layers" size={16} color="#4ECDC4" />
                <Text style={styles.workoutStatText}>
                  {workout.exercises.length} exercises
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#999" />
            </View>
          </TouchableOpacity>
        ))}
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
    paddingVertical: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  categoryScroll: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: '#fff',
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1.5,
    borderColor: '#FF6B6B',
  },
  categoryButtonActive: {
    backgroundColor: '#FF6B6B',
  },
  categoryButtonText: {
    color: '#FF6B6B',
    fontWeight: '600',
    fontSize: 14,
  },
  categoryButtonTextActive: {
    color: '#fff',
  },
  programsContainer: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  workoutCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  workoutCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  workoutName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  workoutDesc: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
    maxWidth: '75%',
  },
  difficultyBadge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
  },
  difficultyText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: 'bold',
  },
  workoutFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingTop: 12,
  },
  workoutStat: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  workoutStatText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 5,
  },
});

export default WorkoutScreen;
