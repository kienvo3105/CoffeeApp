import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed';
import { formatCurrency } from '../../helpers/helper';
import { colors } from '../../constants/color';
const ProductOrderItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', }}>
                <Text style={styles.text}>({item.quantity}x)</Text>
                <View style={{ marginLeft: 5 }}>
                    <Text style={[styles.text]}>{item.Product.name}</Text>
                    <Text style={{ fontSize: 13, color: colors.darkGray }}>{item.Size.name}</Text>
                    {item.noted !== "" &&
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name='edit-note' color={colors.primary} size={20} />
                            <Text style={{ fontSize: 12, color: colors.darkGray }}>{item.noted}</Text>
                        </View>}
                </View>
            </View>
            <Text style={styles.text}>{formatCurrency(item.price)}</Text>
        </View>
    )
}

export default ProductOrderItem

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