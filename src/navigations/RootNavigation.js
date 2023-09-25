import { StyleSheet, StatusBar, Alert, View, ActivityIndicator } from 'react-native'
import React, { useReducer, useMemo, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomMenu from './BottomMenu';
import ListProductScreen from '../screens/ListProductScreen';
import ProductDetail from '../screens/ProductDetail';
import SelectStoreScreen from '../screens/Store/SelectStoreScreen';
import Payment from '../screens/Payment';
import Search from '../screens/Search';
import Profile from '../screens/Setting/Profile';
import MemberCardMenu from './MemberCardMenu';
import Login from '../screens/Login';
import Register from '../screens/Register';

import { colors } from '../constants/color';
import { usePost } from '../api/post';
import { AuthContext } from '../context/AuthContext';
import * as Keychain from 'react-native-keychain';

const Stack = createStackNavigator();

const RootNavigation = () => {
    const { fetchPost, result, isError } = usePost();
    const [state, dispatch] = useReducer(
        (prevState, action) => {
            switch (action.type) {
                case 'INIT':
                    return {
                        ...prevState,
                        isLoading: true
                    };
                case 'RESTORE_TOKEN':
                    return {
                        ...prevState,
                        userToken: action.token,
                        isLoading: false,
                    };
                case 'SIGN_IN':
                    return {
                        ...prevState,
                        isSignOut: false,
                        userToken: action.token,
                        isLoading: false,
                    };
                case 'SIGN_OUT':
                    return {
                        ...prevState,
                        isSignOut: true,
                        userToken: null,
                    };
                case 'ERROR':
                    return {
                        ...prevState,
                        isLoading: false
                    };
            }
        },
        {
            isLoading: true,
            isSignOut: false,
            userToken: null,
        }
    );

    useEffect(() => {
        // Fetch the token from storage then navigate to our appropriate place
        const bootstrapAsync = async () => {
            let userToken = null;
            try {
                const credentials = await Keychain.getGenericPassword();
                if (credentials)
                    userToken = credentials.password;
            } catch (e) {
                // Restoring token failed
                console.log("error login by token", e);
            }

            // After restoring token, we may need to validate it in production apps

            // This will switch to the App screen or Auth screen and this loading
            // screen will be unmounted and thrown away.
            dispatch({ type: 'RESTORE_TOKEN', token: userToken });
        };

        bootstrapAsync();
    }, []);


    const authContext = useMemo(
        () => ({
            signIn: async (email, password) => {
                try {
                    dispatch({ type: 'INIT' });
                    await fetchPost("auth/userLogin", { email, password });
                } catch (e) {
                    // saving error
                    console.log("error login handle!", e);
                }
            },
            signOut: async () => {
                await Keychain.resetGenericPassword();
                dispatch({ type: 'SIGN_OUT' });
            },
        }),
        []
    );

    useEffect(() => {
        if (result) {
            const login = async () => {
                let userToken = null;
                if (result?.errorCode && result?.errorCode !== 0)
                    Alert.alert("Lỗi đăng nhập!!", "Tài khoản hoặc mật khẩu không đúng!")
                if (result?.errorCode === 0) {
                    userToken = result.token;
                    await Keychain.setGenericPassword('myToken', userToken);
                }
                dispatch({ type: 'SIGN_IN', token: userToken });
            }
            login();
        }
    }, [result])

    if (state.isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#3465a4" />
            </View>
        )
    }

    return (
        <AuthContext.Provider value={authContext}>
            <StatusBar backgroundColor={state.userToken === null ? "black" : colors.primary} />
            <NavigationContainer>
                <Stack.Navigator
                    // initialRouteName="Login"
                    screenOptions={{ headerShown: false }}
                >
                    {state.userToken === null ? (
                        <>
                            <Stack.Screen name='Login' component={Login} />
                            <Stack.Screen name='Register' component={Register} />
                        </>
                    ) : (
                        <>
                            <Stack.Screen name="BottomMenu" component={BottomMenu} />
                            <Stack.Screen name='ListProductScreen' component={ListProductScreen} />
                            <Stack.Screen name='ProductDetail' component={ProductDetail} />
                            <Stack.Screen name='SelectStoreScreen' component={SelectStoreScreen} />
                            <Stack.Screen name='Payment' component={Payment} />
                            <Stack.Screen name='Search' component={Search} />
                            <Stack.Screen name='Profile' component={Profile} />
                            <Stack.Screen name='MemberCardMenu' component={MemberCardMenu} />
                        </>
                    )}


                </Stack.Navigator>
            </NavigationContainer>
        </AuthContext.Provider>
    )
}

export default RootNavigation

const styles = StyleSheet.create({})