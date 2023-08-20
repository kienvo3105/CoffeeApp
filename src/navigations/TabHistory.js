import React from 'react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { colors } from '../constants/color';

import OrderHistory from '../screens/History/OrderHistory';
import OrderProcessing from '../screens/History/OrderProcessing';

const Tab = createMaterialTopTabNavigator();


const TabHistory = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: "#ccc",
                tabBarLabelStyle: { fontSize: 13, color: colors.textPrimary },
                tabBarStyle: { backgroundColor: colors.white },
                tabBarIndicatorStyle: {
                    backgroundColor: colors.primary,
                    height: 2,
                    borderRadius: 25,
                },

            }}>
            <Tab.Screen name="OrderProcessing" component={OrderProcessing}
                options={{
                    tabBarLabel: 'Đang diễn ra',
                }} />
            <Tab.Screen name="OrderHistory" component={OrderHistory}
                options={{
                    tabBarLabel: 'Lịch sử đặt hàng',
                }} />
        </Tab.Navigator>
    )
}

export default TabHistory;