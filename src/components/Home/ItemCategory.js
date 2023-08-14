import { StyleSheet, Text, Image, Pressable, View } from 'react-native'
import React from 'react'

import { colors } from "../../constants/color"

const ItemCategory = ({ url, name, handlePressItem }) => {
    return (
        <Pressable
            android_disableSound
            style={styles.container}
            onPress={handlePressItem}>
            <Image source={url} resizeMode='contain' style={styles.image} />
            {/* <View > */}
            <Text style={styles.text} numberOfLines={2}
                ellipsizeMode='tail'>{name}</Text>
            {/* </View> */}
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
        width: 80,
        fontSize: 14,
        color: colors.textPrimary,
        textAlign: 'center'
    },
    image: {
        maxHeight: 50,
    }
})