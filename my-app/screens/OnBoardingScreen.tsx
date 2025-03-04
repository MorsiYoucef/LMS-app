import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Raleway_700Bold, useFonts } from '@expo-google-fonts/raleway'
import { Nunito_400Regular, Nunito_700Bold,Nunito_200ExtraLight } from '@expo-google-fonts/nunito'
import { LinearGradient } from 'expo-linear-gradient'
import { styles } from '@/styles/onBoarding/onBoard'
import { router } from 'expo-router'

export default function OnBoardingScreen() {
    let [fontsLoaded, fontError] = useFonts({
        Raleway_700Bold,
        Nunito_400Regular,
        Nunito_700Bold,
        Nunito_200ExtraLight
    })

    if (!fontsLoaded && !fontError) {
        return null
    }
    return (
        <LinearGradient colors={["#0E036C", "#0E036C"]} style={{ alignItems: 'center', justifyContent: 'center' }}>
            <View>
                <Image style={styles.group_2} source={require('@/assets/onboarding/Group_2.svg')} />
            </View>
            <ImageBackground
                style={styles.backgroundImage}
                source={require('@/assets/onboarding/Vector.svg')}
            >
                <View style={styles.dscpWrapper}>
                    <Text style={[styles.titleText, { fontFamily: 'Raleway_700Bold' }]}>
                        Online Education Is Very Important Nowadays
                    </Text>
                    <Text style={[{ color:'white', marginTop:10}, { fontFamily: 'Nunito_400Regular' }]}>
                        Get Started with us
                    </Text>
                    
                </View>
                <Image style={styles.circle}  source={require('@/assets/onboarding/circle.svg')} />
                <Image style={styles.logo} source={require('@/assets/onboarding/Group_1.svg')} />
                <TouchableOpacity style={styles.btnWrapper} onPress={() => router.push("/(routes)/welcome-intro")}>
                    <Text style={[styles.buttonText, { fontFamily: 'Nunito_700Bold' }]}>
                        Getting Started
                    </Text>
                </TouchableOpacity>
                <Image style={styles.group_3}  source={require('@/assets/onboarding/Group_3.svg')} />
            </ImageBackground>
        </LinearGradient>
    )
}
