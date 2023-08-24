import { StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { enableLatestRenderer } from 'react-native-maps';

import BottomMenu from './src/navigations/BottomMenu';
import ListProductScreen from './src/screens/ListProductScreen';
import ProductDetail from './src/screens/ProductDetail';

import { colors } from './src/constants/color';


// enableLatestRenderer();

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
                    <Stack.Screen name='ListProductScreen' component={ListProductScreen} />
                    <Stack.Screen name='ProductDetail' component={ProductDetail} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default App

const styles = StyleSheet.create({})