import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import useUserStore from '@/store/useUserStore'

export default function TabsLayout() {
    const { user }:any = useUserStore()
    console.log("user from layout",user)
  return (
    <Tabs
    screenOptions={{}}
    >
        <Tabs.Screen name='home/index' />
        <Tabs.Screen name='search/index' />
        <Tabs.Screen name='courses/index' />
        <Tabs.Screen name='profile/index' />
    </Tabs>
  )
}

const styles = StyleSheet.create({})