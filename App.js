import { StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { colors } from './src/constants/color';
import RootNavigation from './src/navigations/RootNavigation';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';

const registerDeviceForMessaging = async () => {
    try {
        await messaging().registerDeviceForRemoteMessages();
        const token = await messaging().getToken();

        await AsyncStorage.setItem('FCMToken', token);

        console.log('FCM Token: ', token);
        // Register the token
        // await register(token);
    } catch (e) {
        console.log("registerDeviceForMessaging error", e)
    }
};

const App = () => {
    useEffect(() => {
        registerDeviceForMessaging();
    }, []);
    return (
        <Provider store={store}>
            <StatusBar backgroundColor={colors.primary} />
            <RootNavigation />
        </Provider>
    )
}

export default App
