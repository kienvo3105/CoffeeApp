import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { colors } from '../constants/color';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'


import Information from '../screens/MemberCard/Information';
import Coupon from '../screens/MemberCard/Coupon';
import ExchangeCoin from '../screens/MemberCard/ExchangeCoin';
import BackBar from '../components/Common/BackBar';
const Tab = createBottomTabNavigator();

const MemberCardMenu = ({ navigation }) => {
    return (
        <>
            <BackBar navigation={navigation} />
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: colors.primary,
                    tabBarStyle: {
                        position: 'absolute',
                        bottom: 25,
                        left: 40,
                        right: 40,
                        elevation: 0,
                        backgroundColor: colors.white,
                        borderRadius: 30,
                        height: 60,
                        // paddingTop: 10,
                        paddingBottom: 5
                    }
                }}
                initialRouteName="Information"

            >
                <Tab.Screen
                    name="Coupon"
                    component={Coupon}
                    options={{
                        tabBarLabel: 'Coupon',
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="wallet" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="ExchangeCoin"
                    component={ExchangeCoin}
                    options={{
                        tabBarLabel: 'Đổi coins',
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="bag-handle" color={color} size={size} />
                        ),
                    }} />
                <Tab.Screen
                    name="Information"
                    component={Information}
                    options={{
                        tabBarLabel: 'Thông tin',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="card-account-details" color={color} size={size} />
                        ),
                    }} />

            </Tab.Navigator>
        </>
    )
}

export default MemberCardMenu

const styles = StyleSheet.create({})