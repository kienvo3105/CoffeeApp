import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'

import { colors } from '../../constants/color'

const ItemProduct = ({ item, handlePressItem }) => {
    return (
        <Pressable style={styles.container} onPress={() => handlePressItem(item.title, item.price)}>
            <Image source={item.image} resizeMode='contain' style={styles.image} />
            <View style={styles.ViewText}>
                <View style={styles.header}>
                    <Text style={styles.textHeader}>{item.title}</Text>
                    <Text style={styles.textHeader}>{item.price}</Text>
                </View>
                <Text
                    style={styles.content}
                    numberOfLines={2}
                    ellipsizeMode='tail'>{item.describe}</Text>
            </View>
        </Pressable>
    )
}

export default ItemProduct

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        // alignItems: 'center',
        margin: 5,
    },
    image: {
        flex: 1,
        // width: 25,
        height: 70,
    },
    ViewText: {
        flex: 3,
        // marginRight: 60
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 10,
        marginBottom: 5
    },
    textHeader: {
        fontSize: 16,
        color: colors.textPrimary
    },
    content: {
        marginRight: 60,
        fontSize: 12,
        color: colors.textExtra,
    }
})