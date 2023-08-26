import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'

import { colors } from '../../constants/color'

const ItemMethodOrder = ({ selected, handleSelect, title }) => {
    return (
        <Pressable
            style={[styles.container, { backgroundColor: selected === title ? colors.primary : colors.darkGray }]}
            onPress={() => handleSelect(title)}>
            <Text style={{ fontSize: 12, color: colors.white, fontWeight: 'bold' }}>{title}</Text>
        </Pressable>
    )
}

export default ItemMethodOrder

const styles = StyleSheet.create({
    container: {
        height: 30,
        width: 60,
        // paddingHorizontal: 5,
        // paddingVertical: 2,,
        marginLeft: 5,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    }
})