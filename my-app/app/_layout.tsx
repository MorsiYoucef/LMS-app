import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import { Text, View } from 'react-native';
import { useState } from 'react';
import OnBoarding from './(routes)/onboarding';
import { Stack } from 'expo-router';
import { ToastProvider } from 'react-native-toast-notifications'
import TabsLayout from './(tabs)/_layout';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  
  return (
    <ToastProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name='index' />
        <Stack.Screen name='(routes)/welcome-intro/index' />
        <Stack.Screen name='(routes)/login/index' />
        <Stack.Screen name='(routes)/sign-up/index' />
        <Stack.Screen name='(routes)/verifyAccount/index' />
        <Stack.Screen name='(routes)/forgot-password/index' />
      </Stack>
    </ToastProvider>
  );
}
