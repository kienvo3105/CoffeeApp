import { StyleSheet, View } from 'react-native'
import React from 'react'

import { colors } from '../../constants/color'

import Ionicons from 'react-native-vector-icons/Ionicons'


const TopBar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.viewIcon}>
                <Ionicons name='person-circle-outline' size={40} color={colors.primary} />
                <Ionicons name='search' size={40} color={colors.gray} />
            </View>
        </View>
    )
}

export default TopBar

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
    },
    viewIcon: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})