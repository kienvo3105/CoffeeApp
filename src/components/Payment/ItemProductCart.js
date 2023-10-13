import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed';
import { colors } from '../../constants/color';
import { formatCurrency } from '../../helpers/helper';
const ItemProductCart = ({ item }) => {
    const { productName, quantity, price, sizeId, noted } = item
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', }}>
                <Text style={styles.text}>({quantity}x)</Text>
                <View style={{ marginLeft: 5 }}>
                    <Text style={[styles.text]}>{productName}</Text>
                    <Text style={{ fontSize: 13, color: colors.darkGray }}>{sizeId[sizeId.length]}</Text>
                    {noted !== "" &&
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name='edit-note' color={colors.primary} size={20} />
                            <Text style={{ fontSize: 12, color: colors.darkGray }}>{noted}</Text>
                        </View>}
                </View>
            </View>
            <Text style={styles.text}>{formatCurrency(price)}</Text>
        </View>
    )
}

export default ItemProductCart

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    text: {
        fontSize: 15,
        color: colors.textPrimary
    }
})