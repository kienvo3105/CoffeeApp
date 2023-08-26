import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../../constants/color'

import Ionicons from 'react-native-vector-icons/Ionicons'
const BackBar = ({ title, navigation }) => {
    return (
        <View style={styles.container}>
            <Ionicons name='chevron-back' size={20} color={colors.textPrimary} onPress={() => navigation.goBack()} />

            <Text style={{ fontSize: 20, color: colors.textPrimary, fontWeight: 'bold' }}>{title}</Text>
            <View />
        </View >
    )
}

export default BackBar

const styles = StyleSheet.create({
    container: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.white
    },

})