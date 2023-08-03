import { StyleSheet, View } from 'react-native'
import React from 'react'

import { Header } from "react-native-elements"
import { colors } from '../../constants/color'


const TopBar = () => {
    return (
        <View >
            <Header
                backgroundColor={colors.white}
                leftComponent={{ icon: 'account-circle', color: colors.primary, size: 30, onPress: () => { console.log("avatar") } }}
                rightComponent={{ icon: 'search', color: colors.gray, size: 30, onPress: () => { console.log("search") } }}
                statusBarProps={{ backgroundColor: colors.primary }}
            >
            </Header>
        </View>
    )
}

export default TopBar

const styles = StyleSheet.create({
})