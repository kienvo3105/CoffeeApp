import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Oder from '../screens/Oder';
import History from '../screens/History/History';
import Store from '../screens/Store';

import { colors } from '../constants/color';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator();

const BottomMenu = () => {
    return (
        <Tab.Navigator
            screenOptions={{ headerShown: false, tabBarActiveTintColor: colors.primary, }} >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Trang chủ',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="coffee" color={color} size={size} />
                    ),
                }} />
            <Tab.Screen
                name="Oder"
                component={Oder}
                options={{
                    tabBarLabel: 'Đặt hàng',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="silverware-variant" color={color} size={size} />
                    ),
                }} />
            <Tab.Screen
                name="History"
                component={History}
                options={{
                    tabBarLabel: 'Hoạt động',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="history" color={color} size={size} />
                    ),
                }} />
            <Tab.Screen
                name="Store"
                component={Store}
                options={{
                    tabBarLabel: 'Cửa hàng',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="storefront-outline" color={color} size={size} />
                    ),
                }} />
        </Tab.Navigator>
    )
}

export default BottomMenu;
