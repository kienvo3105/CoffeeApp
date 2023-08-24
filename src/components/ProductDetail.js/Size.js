import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'

import { colors } from '../../constants/color'

const Size = ({ size, addMoney, selected, handlePressSize }) => {
    return (
        <Pressable
            android_disableSound
            style={[styles.container, {
                backgroundColor: selected === size ? colors.primary : colors.white,
            }]}
            onPress={() => handlePressSize(size, addMoney)}
        >
            <Text style={[styles.size, {
                color: selected === size ? colors.white : colors.textExtra,
            }]}>{size}</Text>
        </Pressable>
    )
}

export default Size

const styles = StyleSheet.create({
    container: {
        height: 45,
        width: 80,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
        borderRadius: 10
    },
    size: {
        // color: colors.textExtra,
        fontSize: 15,
        fontWeight: '800'
    }
})