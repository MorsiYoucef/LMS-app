// stores/userStore.ts
import { StateCreator,create } from 'zustand';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SERVER_URI } from '@/utils/uri';
// import { UserState } from '../types/userStore';

const useUserStore = create((set) => ({
    loading: true,
    user: null,
    error: null,

    fetchUser: async () => {
        set({ loading: true, error: null });

        try {
            const accessToken = await AsyncStorage.getItem('access_token');
            const refreshToken = await AsyncStorage.getItem('refresh_token');
            console.log(accessToken, refreshToken);

            const response = await axios.get(`${SERVER_URI}/me`, {
                headers: {
                    "access-token": accessToken,
                    "refresh-token": refreshToken,
                },
            });

            set({ user: response.data.user, loading: false });
        } catch (err: any) {
            set({ error: err.message, loading: false });
        }
    },
}));

export default useUserStore;