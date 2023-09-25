import { StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import BottomMenu from './src/navigations/BottomMenu';
// import ListProductScreen from './src/screens/ListProductScreen';
// import ProductDetail from './src/screens/ProductDetail';
// import SelectStoreScreen from './src/screens/Store/SelectStoreScreen';
// import Payment from './src/screens/Payment';
// import Search from './src/screens/Search';
// import Profile from './src/screens/Setting/Profile';
// import MemberCardMenu from './src/navigations/MemberCardMenu';
// import Login from './src/screens/Login';
// import Register from './src/screens/Register';

import { colors } from './src/constants/color';
import RootNavigation from './src/navigations/RootNavigation';


const Stack = createStackNavigator();

const App = () => {
    return (
        <>
            <StatusBar backgroundColor={colors.primary} />
            <RootNavigation />
        </>
    )
}

export default App

const styles = StyleSheet.create({})