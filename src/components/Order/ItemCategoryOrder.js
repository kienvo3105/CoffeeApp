import { StyleSheet, Text, Image, Pressable, View } from 'react-native'
import React from 'react'

import { colors } from "../../constants/color"

const ItemCategoryOrder = ({ url, name, handlePressItem, id, selected }) => {
    return (
        <Pressable
            android_disableSound
            style={[styles.container, { borderBottomWidth: id === selected ? 2 : 0, }]}
            onPress={() => handlePressItem(id)}>
            <Image source={url} resizeMode='contain' style={styles.image} />
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <Text
                    style={[styles.text, { color: id === selected ? colors.primary : colors.textPrimary }]}
                    numberOfLines={2}
                    ellipsizeMode='tail'>{name}</Text>
            </View>
        </Pressable>
    )
}

export default ItemCategoryOrder

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        height: 90,
        alignItems: 'center',
        // justifyContent: 'center',
        borderColor: colors.primary,
        // backgroundColor: 'red'
    },
    text: {
        paddingTop: 5,
        fontSize: 12,
        maxWidth: 80,
        textAlign: 'center',
    },
    image: {
        maxHeight: 50
    }
})