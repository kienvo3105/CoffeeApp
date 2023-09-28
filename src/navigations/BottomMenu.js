import React, { useEffect, useContext } from 'react'
import { Alert } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Oder from '../screens/Oder';
import History from '../screens/History/History';
import Store from '../screens/Store/Store';
import Setting from '../screens/Setting/Setting';
import jwt_decode from "jwt-decode";
import { colors } from '../constants/color';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useGet } from '../api/get';
import { AuthContext } from '../context/AuthContext';
import * as Keychain from 'react-native-keychain';

const Tab = createBottomTabNavigator();

const BottomMenu = () => {
    const { result, isError, fetchGet } = useGet();
    const { signOut } = useContext(AuthContext);
    useEffect(() => {
        const fetchUser = async () => {
            try {

                const credentials = await Keychain.getGenericPassword();
                let decoded = jwt_decode(credentials.password);
                const currentDate = new Date()
                if (!decoded || decoded.exp - currentDate < 0) {
                    Alert.alert("Lỗi đăng nhập", "Phiên đăng nhập đã hết hạn! Vui lòng đăng nhập!")
                    signOut();
                }
                else

                    await fetchGet(`/user/${decoded.Info.id}`);
            } catch (e) {
                console.log("Error fetch user:", e);
            }
        }
        fetchUser();
    }, [])

    useEffect(() => {
        if (result && !isError) {
            // console.log("error:", isError)
            console.log("info user:", result)
        }
    }, [result])

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
            <Tab.Screen
                name="Setting"
                component={Setting}
                options={{
                    tabBarLabel: 'Khác',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="menu" color={color} size={size} />
                    ),
                }} />
        </Tab.Navigator>
    )
}

export default BottomMenu;
