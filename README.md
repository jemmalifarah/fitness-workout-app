# Fitness Workout App 💪

A comprehensive mobile fitness application built with React Native and Expo that helps users achieve their fitness goals with posture correction, arm toning, thigh shaping, and full-body sculpting exercises.

## Features

### 🏋️ Workouts
- **Posture Correction**: Exercises to fix alignment and improve posture
- **Arm Toning**: Burn arm fat and build defined biceps and triceps
- **Thigh Shaping**: Reduce thigh fat and sculpt your legs
- **Full Body Sculpt**: Complete body transformation workouts

### ⏱️ Exercise Timer
- Individual timer for each exercise
- Automatic rest periods between exercises
- Play/pause controls
- Visual countdown display
- Sound notifications

### 📊 Progress Tracking
- Track completed workouts
- Monitor calories burned
- View weekly breakdown
- Achievement badges and milestones
- Daily streak counter

### 🎯 Exercise Details
- Descriptive images for each exercise
- Target muscle groups highlighted
- Step-by-step instructions
- Benefits explanation
- Difficulty levels

### ⚙️ Settings
- Profile customization
- Notification preferences
- Dark mode (coming soon)
- Fitness goals configuration
- Privacy and support information

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Expo CLI

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/jemmalifarah/fitness-workout-app.git
cd fitness-workout-app
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start the development server**
```bash
npm start
# or
yarn start
```

4. **Run on your device**
- **iOS**: Press `i` to run on iOS simulator
- **Android**: Press `a` to run on Android emulator
- **Web**: Press `w` to run in web browser
- **Mobile**: Scan QR code with Expo Go app on your phone

## Project Structure

```
fitness-workout-app/
├── src/
│   ├── components/
│   │   └── ExerciseTimer.tsx      # Timer component
│   ├── screens/
│   │   ├── HomeScreen.tsx          # Home page
│   │   ├── WorkoutScreen.tsx       # Workout list
│   │   ├── ExerciseDetailScreen.tsx # Exercise details
│   │   ├── ProgressScreen.tsx      # Progress tracking
│   │   └── SettingsScreen.tsx      # Settings
│   └── data/
│       └── exercises.ts            # Exercise database
├── App.tsx                         # Main app component
├── app.json                        # Expo configuration
└── package.json                    # Dependencies
```

## Available Exercises

### Posture Correction
- Plank (30 sec)
- Shoulder Rolls (20 sec)

### Arm Toning
- Bicep Curls (30 sec)
- Tricep Dips (30 sec)
- Arm Circles (20 sec)

### Thigh Shaping
- Squats (30 sec)
- Lunges (30 sec)
- Leg Raises (25 sec)

### Full Body Sculpt
- Mountain Climbers (30 sec)
- Burpees (30 sec)
- Russian Twists (25 sec)
- Push-ups (30 sec)

## Workout Programs

1. **Posture Perfect** (50 min) - Easy
2. **Arm Toner** (80 min) - Easy
3. **Thigh Blaster** (85 min) - Easy
4. **Full Body Sculpt** (115 min) - Easy
5. **Quick Total Body** (115 min) - Easy

## Technologies Used

- **React Native** - Cross-platform mobile framework
- **Expo** - Development platform and services
- **TypeScript** - Type-safe JavaScript
- **React Navigation** - Navigation library
- **Expo Vector Icons** - Icon library
- **AsyncStorage** - Local data persistence

## Usage

1. **Browse Workouts**: Navigate to the Workouts tab to see all available programs
2. **Select Category**: Filter by posture, arms, thighs, or full body
3. **Start Workout**: Select a program and press "Start Workout"
4. **Follow Instructions**: Follow the step-by-step instructions
5. **Use Timer**: Let the timer guide your exercise duration
6. **Track Progress**: Check your progress in the Progress tab

## Customization

You can easily customize the app by:

- **Adding new exercises**: Edit `src/data/exercises.ts`
- **Creating workout programs**: Add programs in the `workoutPrograms` array
- **Changing colors**: Modify the color values in style files
- **Adding new features**: Create new components in `src/components/`

## Future Enhancements

- [ ] User authentication
- [ ] Cloud sync for progress tracking
- [ ] Video tutorials for exercises
- [ ] Personalized workout recommendations
- [ ] Social features (friend challenges)
- [ ] Nutrition tracking
- [ ] Rest day recommendations
- [ ] Advanced analytics

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Support

For support, please open an issue on GitHub or contact us at support@fitnessworkoutapp.com

## Changelog

### v1.0.0 (Initial Release)
- Initial app launch
- 12 exercises with detailed instructions
- 5 workout programs
- Exercise timer with rest periods
- Progress tracking dashboard
- Achievement system
- Settings and preferences

---

**Get fit, stay healthy! 💪**
