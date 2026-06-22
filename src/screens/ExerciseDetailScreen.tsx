import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { exercisesData, workoutPrograms } from '../data/exercises';
import ExerciseTimer from '../components/ExerciseTimer';

const ExerciseDetailScreen = ({ route, navigation }: any) => {
  const { workoutId } = route.params;
  const workout = workoutPrograms.find((w) => w.id === workoutId);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [isWorkoutActive, setIsWorkoutActive] = useState(false);
  const [completedExercises, setCompletedExercises] = useState<number[]>([]);

  if (!workout) {
    return (
      <View style={styles.container}>
        <Text>Workout not found</Text>
      </View>
    );
  }

  const exercises = workout.exercises
    .map((id) => exercisesData.find((e) => e.id === id))
    .filter((e) => e !== undefined) as typeof exercisesData;

  const currentExercise = exercises[currentExerciseIndex];

  const handleStartWorkout = () => {
    setIsWorkoutActive(true);
  };

  const handleCompleteExercise = () => {
    if (!completedExercises.includes(currentExerciseIndex)) {
      setCompletedExercises([...completedExercises, currentExerciseIndex]);
    }

    if (currentExerciseIndex < exercises.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
    } else {
      Alert.alert('Congratulations! 🎉', 'You completed the entire workout!', [
        {
          text: 'Done',
          onPress: () => {
            setIsWorkoutActive(false);
            setCurrentExerciseIndex(0);
            setCompletedExercises([]);
            navigation.goBack();
          },
        },
      ]);
    }
  };

  const handleSkipExercise = () => {
    if (currentExerciseIndex < exercises.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
    }
  };

  const handlePreviousExercise = () => {
    if (currentExerciseIndex > 0) {
      setCurrentExerciseIndex(currentExerciseIndex - 1);
    }
  };

  if (!isWorkoutActive) {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={28} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{workout.name}</Text>
          <View style={{ width: 28 }} />
        </View>

        <View style={styles.workoutInfoContainer}>
          <View style={styles.infoCard}>
            <Ionicons name="timer" size={24} color="#FF6B6B" />
            <Text style={styles.infoValue}>{workout.duration}</Text>
            <Text style={styles.infoLabel}>Minutes</Text>
          </View>
          <View style={styles.infoCard}>
            <Ionicons name="layers" size={24} color="#4ECDC4" />
            <Text style={styles.infoValue}>{exercises.length}</Text>
            <Text style={styles.infoLabel}>Exercises</Text>
          </View>
          <View style={styles.infoCard}>
            <Ionicons name="flame" size={24} color="#F7B731" />
            <Text style={styles.infoValue}>{exercises.length * 30}</Text>
            <Text style={styles.infoLabel}>Calories</Text>
          </View>
        </View>

        <View style={styles.descriptionContainer}>
          <Text style={styles.sectionTitle}>About This Workout</Text>
          <Text style={styles.description}>{workout.description}</Text>
          <Text style={styles.sectionTitle} style={{ marginTop: 20 }}>
            Exercises Included
          </Text>
          {exercises.map((exercise, index) => (
            <View key={exercise.id} style={styles.exerciseListItem}>
              <View style={styles.exerciseListNumber}>
                <Text style={styles.exerciseListNumberText}>{index + 1}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.exerciseListName}>{exercise.name}</Text>
                <Text style={styles.exerciseListDuration}>
                  {exercise.duration} sec • Targets: {exercise.targetMuscles.join(', ')}
                </Text>
              </View>
            </View>
          ))}
        </View>

        <TouchableOpacity
          style={styles.startButton}
          onPress={handleStartWorkout}
        >
          <Ionicons name="play" size={24} color="#fff" />
          <Text style={styles.startButtonText}>Start Workout</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  return (
    <View style={styles.container}>
      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <View style={styles.progressInfo}>
          <Text style={styles.progressText}>
            Exercise {currentExerciseIndex + 1} of {exercises.length}
          </Text>
          <View style={styles.progressBar}>
            <View
              style={[
                styles.progressFill,
                {
                  width: `${((currentExerciseIndex + 1) / exercises.length) * 100}%`,
                },
              ]}
            />
          </View>
        </View>
      </View>

      {/* Exercise Display */}
      <ScrollView style={styles.exerciseContainer}>
        <View style={styles.exerciseImage}>
          <Image
            source={{ uri: currentExercise.image }}
            style={styles.image}
          />
          <View style={styles.muscleInfo}>
            <Text style={styles.muscleTitle}>Target Muscles:</Text>
            <View style={styles.muscleTags}>
              {currentExercise.targetMuscles.map((muscle) => (
                <View key={muscle} style={styles.muscleTag}>
                  <Text style={styles.muscleTagText}>{muscle}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        <View style={styles.exerciseDetails}>
          <Text style={styles.exerciseName}>{currentExercise.name}</Text>
          <Text style={styles.exerciseCategory}>
            {currentExercise.category.charAt(0).toUpperCase() +
              currentExercise.category.slice(1)}
          </Text>

          <View style={styles.benefitsContainer}>
            <Ionicons name="star" size={20} color="#F7B731" />
            <Text style={styles.benefitsText}>{currentExercise.benefits}</Text>
          </View>

          <Text style={styles.instructionsTitle}>How to Perform:</Text>
          {currentExercise.instructions.map((instruction, index) => (
            <View key={index} style={styles.instructionItem}>
              <View style={styles.instructionNumber}>
                <Text style={styles.instructionNumberText}>{index + 1}</Text>
              </View>
              <Text style={styles.instructionText}>{instruction}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Timer */}
      <ExerciseTimer
        duration={currentExercise.duration}
        onComplete={handleCompleteExercise}
      />

      {/* Navigation Buttons */}
      <View style={styles.navigationContainer}>
        <TouchableOpacity
          style={[
            styles.navButton,
            currentExerciseIndex === 0 && styles.navButtonDisabled,
          ]}
          onPress={handlePreviousExercise}
          disabled={currentExerciseIndex === 0}
        >
          <Ionicons name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.skipButton}
          onPress={handleSkipExercise}
        >
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.navButton,
            currentExerciseIndex === exercises.length - 1 &&
              styles.navButtonDisabled,
          ]}
          onPress={() => setCurrentExerciseIndex(currentExerciseIndex + 1)}
          disabled={currentExerciseIndex === exercises.length - 1}
        >
          <Ionicons name="chevron-forward" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#FF6B6B',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 15,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  workoutInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  infoCard: {
    alignItems: 'center',
  },
  infoValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 5,
  },
  infoLabel: {
    fontSize: 12,
    color: '#999',
  },
  descriptionContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 22,
  },
  exerciseListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  exerciseListNumber: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#FF6B6B',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  exerciseListNumberText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  exerciseListName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  exerciseListDuration: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
  startButton: {
    backgroundColor: '#FF6B6B',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
    paddingVertical: 15,
    borderRadius: 12,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  progressContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
  },
  progressInfo: {
    alignItems: 'center',
  },
  progressText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  progressBar: {
    width: '100%',
    height: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#FF6B6B',
  },
  exerciseContainer: {
    flex: 1,
  },
  exerciseImage: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 12,
    marginBottom: 15,
  },
  muscleInfo: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
  },
  muscleTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  muscleTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  muscleTag: {
    backgroundColor: '#FF6B6B',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    marginRight: 8,
    marginBottom: 8,
  },
  muscleTagText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  exerciseDetails: {
    paddingHorizontal: 20,
  },
  exerciseName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  exerciseCategory: {
    fontSize: 14,
    color: '#999',
    marginBottom: 15,
    textTransform: 'capitalize',
  },
  benefitsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF4E5',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
  },
  benefitsText: {
    fontSize: 13,
    color: '#333',
    marginLeft: 10,
    flex: 1,
  },
  instructionsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  instructionItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  instructionNumber: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#4ECDC4',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  instructionNumberText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  instructionText: {
    flex: 1,
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginTop: 3,
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: '#f9f9f9',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  navButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FF6B6B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navButtonDisabled: {
    backgroundColor: '#ddd',
  },
  skipButton: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#FF6B6B',
  },
  skipButtonText: {
    color: '#FF6B6B',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default ExerciseDetailScreen;
