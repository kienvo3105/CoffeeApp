import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import { colors } from '../../constants/color'
import { formatCurrency } from '../../helpers/helper'
const BestProduct = ({ title, url, price, handlePressItem }) => {
    return (
        <Pressable style={styles.container} onPress={handlePressItem}>
            <Image source={{ uri: url }} style={styles.image} resizeMode='contain' />
            <Text style={styles.title}>{title}</Text>
            <View style={styles.borderPrice}>
                <Text style={styles.price}>{formatCurrency(price)}</Text>
            </View>
        </Pressable>
    )
}

export default BestProduct

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 150,
        width: 110,
        backgroundColor: "white",
        // marginBottom: 40,
        marginLeft: 10,
        borderRadius: 12,
        justifyContent: 'center'
    },
    image: {
        height: 70,
        width: 'auto',
    },
    title: {
        fontSize: 13,
        padding: 5,
        color: colors.textPrimary,
    },
    borderPrice: {
        backgroundColor: colors.gray,
        alignItems: 'center',
        width: 60,
        marginLeft: 5,
        marginTop: 7,
        borderRadius: 20,
    },
    price: {
        color: colors.primary,
        fontSize: 12,
    }
})