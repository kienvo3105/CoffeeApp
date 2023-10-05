import { StyleSheet, Text, Image, Pressable, View } from 'react-native'
import React from 'react'


import { colors } from "../../constants/color"

import { useNavigation } from '@react-navigation/native'


const ItemCategory = ({ url, name, category }) => {
    const navigation = useNavigation();
    return (
        <Pressable
            android_disableSound
            style={styles.container}
            onPress={() => navigation.navigate("ListProductScreen", { categoryID: category, categoryName: name })}>
            <Image source={{ uri: url }} resizeMode='contain' style={styles.image} />
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
        // flex: 1,
        // height: 100,
        alignItems: 'center',
        paddingHorizontal: 5
        // paddingBottom: 20
    },
    text: {
        width: 80,
        fontSize: 13,
        color: colors.textPrimary,
        textAlign: 'center'
    },
    image: {
        height: 65,
        width: 65
    }
})