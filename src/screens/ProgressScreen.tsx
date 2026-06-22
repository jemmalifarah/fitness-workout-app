import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProgressScreen = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  const stats = {
    workoutsCompleted: 12,
    totalMinutes: 480,
    caloriesBurned: 2400,
    averagePerDay: 1.7,
    streak: 5,
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Your Progress</Text>
        <Text style={styles.subtitle}>Track your fitness journey</Text>
      </View>

      {/* Period Selector */}
      <View style={styles.periodSelector}>
        {['week', 'month', 'all'].map((period) => (
          <TouchableOpacity
            key={period}
            style={[
              styles.periodButton,
              selectedPeriod === period && styles.periodButtonActive,
            ]}
            onPress={() => setSelectedPeriod(period)}
          >
            <Text
              style={[
                styles.periodButtonText,
                selectedPeriod === period && styles.periodButtonTextActive,
              ]}
            >
              {period.charAt(0).toUpperCase() + period.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Stats Grid */}
      <View style={styles.statsGrid}>
        <View style={styles.statCardLarge}>
          <View style={styles.statIconContainer}>
            <Ionicons name="checkmark-circle" size={32} color="#FF6B6B" />
          </View>
          <Text style={styles.statValue}>{stats.workoutsCompleted}</Text>
          <Text style={styles.statLabel}>Workouts</Text>
          <Text style={styles.statPeriod}>This week</Text>
        </View>

        <View style={styles.statCardLarge}>
          <View style={styles.statIconContainer}>
            <Ionicons name="timer" size={32} color="#4ECDC4" />
          </View>
          <Text style={styles.statValue}>{stats.totalMinutes}</Text>
          <Text style={styles.statLabel}>Minutes</Text>
          <Text style={styles.statPeriod}>Trained</Text>
        </View>

        <View style={styles.statCardLarge}>
          <View style={styles.statIconContainer}>
            <Ionicons name="flame" size={32} color="#F7B731" />
          </View>
          <Text style={styles.statValue}>{stats.caloriesBurned}</Text>
          <Text style={styles.statLabel}>Calories</Text>
          <Text style={styles.statPeriod}>Burned</Text>
        </View>

        <View style={styles.statCardLarge}>
          <View style={styles.statIconContainer}>
            <Ionicons name="fire" size={32} color="#FF6B6B" />
          </View>
          <Text style={styles.statValue}>{stats.streak}</Text>
          <Text style={styles.statLabel}>Day Streak</Text>
          <Text style={styles.statPeriod}>Keep it up!</Text>
        </View>
      </View>

      {/* Achievement Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Achievements 🏆</Text>
        <View style={styles.achievementGrid}>
          <View style={styles.achievementCard}>
            <Ionicons name="star" size={32} color="#F7B731" />
            <Text style={styles.achievementName}>First Step</Text>
            <Text style={styles.achievementDesc}>Complete 1 workout</Text>
          </View>
          <View style={styles.achievementCard}>
            <Ionicons name="flame" size={32} color="#FF6B6B" />
            <Text style={styles.achievementName}>On Fire</Text>
            <Text style={styles.achievementDesc}>5 day streak</Text>
          </View>
          <View style={[styles.achievementCard, styles.achievementCardLocked]}>
            <Ionicons name="lock" size={32} color="#ccc" />
            <Text style={styles.achievementName}>Legend</Text>
            <Text style={styles.achievementDesc}>30 day streak</Text>
          </View>
          <View style={[styles.achievementCard, styles.achievementCardLocked]}>
            <Ionicons name="lock" size={32} color="#ccc" />
            <Text style={styles.achievementName}>Iron Muscles</Text>
            <Text style={styles.achievementDesc}>100 workouts</Text>
          </View>
        </View>
      </View>

      {/* Weekly Breakdown */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Weekly Breakdown</Text>
        {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(
          (day, index) => {
            const workouts = Math.floor(Math.random() * 3);
            return (
              <View key={day} style={styles.weekdayRow}>
                <Text style={styles.weekday}>{day}</Text>
                <View style={styles.workoutDots}>
                  {[...Array(3)].map((_, i) => (
                    <View
                      key={i}
                      style={[
                        styles.workoutDot,
                        i < workouts && styles.workoutDotActive,
                      ]}
                    />
                  ))}
                </View>
                <Text style={styles.workoutCount}>
                  {workouts} workout{workouts !== 1 ? 's' : ''}
                </Text>
              </View>
            );
          }
        )}
      </View>

      {/* Goals Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Your Goals</Text>
        <View style={styles.goalCard}>
          <View>
            <Text style={styles.goalTitle}>Weekly Goal</Text>
            <Text style={styles.goalDesc}>Complete 10 workouts</Text>
          </View>
          <View style={styles.goalProgress}>
            <View style={styles.goalProgressBar}>
              <View style={[styles.goalProgressFill, { width: '70%' }]} />
            </View>
            <Text style={styles.goalProgressText}>7/10</Text>
          </View>
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
    backgroundColor: '#4ECDC4',
    paddingHorizontal: 20,
    paddingVertical: 30,
    paddingTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  periodSelector: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 15,
    backgroundColor: '#fff',
    gap: 10,
  },
  periodButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: '#ddd',
  },
  periodButtonActive: {
    backgroundColor: '#4ECDC4',
    borderColor: '#4ECDC4',
  },
  periodButtonText: {
    color: '#666',
    fontWeight: '600',
  },
  periodButtonTextActive: {
    color: '#fff',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    paddingVertical: 15,
    gap: 10,
  },
  statCardLarge: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  statIconContainer: {
    marginBottom: 10,
  },
  statValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  statLabel: {
    fontSize: 14,
    color: '#999',
    marginTop: 5,
  },
  statPeriod: {
    fontSize: 11,
    color: '#ccc',
    marginTop: 2,
  },
  section: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  achievementGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  achievementCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  achievementCardLocked: {
    opacity: 0.5,
  },
  achievementName: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 8,
  },
  achievementDesc: {
    fontSize: 11,
    color: '#999',
    marginTop: 3,
    textAlign: 'center',
  },
  weekdayRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  weekday: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  workoutDots: {
    flexDirection: 'row',
    gap: 6,
    marginHorizontal: 12,
  },
  workoutDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#f0f0f0',
  },
  workoutDotActive: {
    backgroundColor: '#4ECDC4',
  },
  workoutCount: {
    fontSize: 12,
    color: '#999',
    minWidth: 60,
    textAlign: 'right',
  },
  goalCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  goalTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  goalDesc: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
  goalProgress: {
    alignItems: 'flex-end',
  },
  goalProgressBar: {
    width: 100,
    height: 6,
    backgroundColor: '#f0f0f0',
    borderRadius: 3,
    marginBottom: 8,
    overflow: 'hidden',
  },
  goalProgressFill: {
    height: '100%',
    backgroundColor: '#4ECDC4',
  },
  goalProgressText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#4ECDC4',
  },
});

export default ProgressScreen;
