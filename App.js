import { StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { enableLatestRenderer } from 'react-native-maps';

import BottomMenu from './src/navigations/BottomMenu';
import ListProductScreen from './src/screens/ListProductScreen';
import ProductDetail from './src/screens/ProductDetail';
import SelectStoreScreen from './src/screens/Store/SelectStoreScreen';
import Payment from './src/screens/Payment';
import Search from './src/screens/Search';
import Profile from './src/screens/Setting/Profile';
import MemberCardMenu from './src/navigations/MemberCardMenu';

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
                    <Stack.Screen name='SelectStoreScreen' component={SelectStoreScreen} />
                    <Stack.Screen name='Payment' component={Payment} />
                    <Stack.Screen name='Search' component={Search} />
                    <Stack.Screen name='Profile' component={Profile} />
                    <Stack.Screen name='MemberCardMenu' component={MemberCardMenu} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default App

const styles = StyleSheet.create({})