import { StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomMenu from './src/navigations/BottomMenu';
import { colors } from './src/constants/color';



const Stack = createStackNavigator();

const App = () => {
    return (
        <>
            <StatusBar backgroundColor={colors.primary} />
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="BottomMenu"
                    screenOptions={{ headerShown: false }}
                >
                    <Stack.Screen name="BottomMenu" component={BottomMenu} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default App

const styles = StyleSheet.create({})