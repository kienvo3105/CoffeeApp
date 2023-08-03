import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'

import { colors } from "../../constants/color"

const ItemCategory = ({ url, name, handlePressItem }) => {
    return (
        <Pressable
            android_disableSound
            style={styles.container}
            onPress={handlePressItem}>
            <Image source={url} resizeMode='contain' style={styles.image} />
            <Text style={styles.text}>{name}</Text>
        </Pressable>
    )
}

export default ItemCategory

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        fontSize: 14,
        colors: colors.textPrimary
    },
    image: {
        maxHeight: 50
    }
})