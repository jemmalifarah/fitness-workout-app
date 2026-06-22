import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ExerciseTimerProps {
  duration: number;
  onComplete: () => void;
}

const ExerciseTimer: React.FC<ExerciseTimerProps> = ({
  duration,
  onComplete,
}) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isRunning, setIsRunning] = useState(false);
  const [isResting, setIsResting] = useState(false);
  const [restTime, setRestTime] = useState(10);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
      setIsResting(true);
      setRestTime(10);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isResting && restTime > 0) {
      interval = setInterval(() => {
        setRestTime((prev) => prev - 1);
      }, 1000);
    } else if (restTime === 0 && isResting) {
      setIsResting(false);
      setTimeLeft(duration);
      onComplete();
    }

    return () => clearInterval(interval);
  }, [isResting, restTime, duration, onComplete]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(duration);
    setIsResting(false);
    setRestTime(10);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <View style={styles.timerContainer}>
      <View
        style={[
          styles.timerDisplay,
          isResting && styles.timerDisplayRest,
        ]}
      >
        <Text style={styles.timerLabel}>
          {isResting ? 'REST' : 'EXERCISE'}
        </Text>
        <Text style={styles.timerText}>
          {isResting ? formatTime(restTime) : formatTime(timeLeft)}
        </Text>
        {!isRunning && timeLeft === duration && (
          <Text style={styles.readyText}>Get Ready!</Text>
        )}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.resetButton}
          onPress={resetTimer}
        >
          <Ionicons name="refresh" size={24} color="#FF6B6B" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.playButton, !isRunning && styles.pauseButton]}
          onPress={toggleTimer}
        >
          <Ionicons
            name={isRunning ? 'pause' : 'play'}
            size={32}
            color="#fff"
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.skipButton}
          onPress={onComplete}
        >
          <Ionicons name="skip-forward" size={24} color="#FF6B6B" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timerContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  timerDisplay: {
    backgroundColor: '#FFE5E5',
    borderRadius: 16,
    paddingVertical: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  timerDisplayRest: {
    backgroundColor: '#E5F9F7',
  },
  timerLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FF6B6B',
    letterSpacing: 2,
    marginBottom: 10,
  },
  timerText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FF6B6B',
    fontVariant: ['tabular-nums'],
  },
  readyText: {
    fontSize: 12,
    color: '#FF6B6B',
    marginTop: 10,
    fontStyle: 'italic',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  playButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FF6B6B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pauseButton: {
    backgroundColor: '#4ECDC4',
  },
  resetButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FF6B6B',
  },
  skipButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FF6B6B',
  },
});

export default ExerciseTimer;
