import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import { Text, View } from 'react-native';
import { useState } from 'react';
import OnBoarding from './(routes)/onboarding';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [isLoggedIn, setisLoggedIn] = useState(false)
  return (
    <>
      {isLoggedIn ? (
        <View></View>
      ): (
        <OnBoarding />
      )}
    </>
  );
}
