import { Redirect } from 'expo-router'
import { useState,useEffect } from 'react'
import { Text } from 'react-native'
import Loader from "@/components/Loader";
import useUserStore from '@/store/useUserStore';

export default function index() {
  const { user, loading, error, fetchUser }: any = useUserStore()
  console.log(loading, user)

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Redirect href={!user ? "/(routes)/onboarding" : "/(tabs)"} />
      )}
    </>
  )
}
