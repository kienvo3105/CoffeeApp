import { StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import { colors } from './src/constants/color';
import RootNavigation from './src/navigations/RootNavigation';
import { Provider } from 'react-redux';
import store from './src/redux/store';


const App = () => {
    return (
        <Provider store={store}>
            <StatusBar backgroundColor={colors.primary} />
            <RootNavigation />
        </Provider>
    )
}

export default App

const styles = StyleSheet.create({})