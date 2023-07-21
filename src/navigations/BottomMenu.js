import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Oder from '../screens/Oder';
import { colors } from '../constants/color';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
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
                        <MaterialIcons name="emoji-food-beverage" color={color} size={size} />
                    ),
                }} />
        </Tab.Navigator>
    )
}

export default BottomMenu;
