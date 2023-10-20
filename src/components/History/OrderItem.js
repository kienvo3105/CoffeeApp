import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../../constants/color';

import { convertFullDate, formatCurrency } from '../../helpers/helper';
import { useNavigation } from '@react-navigation/native';

const OrderItem = ({ item }) => {
    const navigation = useNavigation();
    return (
        <Pressable style={styles.container}
            onPress={() => navigation.navigate('OrderDetail', { item })}>
            <Image source={{ uri: item.Branch?.image }} resizeMode='cover' style={styles.image} />
            <View style={styles.bill}>
                <View style={{ justifyContent: 'space-between' }}>
                    <Text style={styles.branch}>{item.Branch?.name}</Text>
                    <Text style={styles.text}>{item.quantity} Products</Text>
                    <Text style={styles.text}>{convertFullDate(Date.parse(item.orderDate))}</Text>

                </View>
                <View style={{ justifyContent: 'space-around', }}>
                    <Text style={styles.price}>{formatCurrency(item.finalPrice)}</Text>
                    <Text style={[styles.status, { backgroundColor: item.OrderStatus?.id === 't1' ? colors.primary : colors.green }]}>{item.OrderStatus?.name}</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default OrderItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 15,
        marginTop: 15,
        backgroundColor: 'white',
        borderRadius: 10
    },
    image: {
        height: 90,
        width: 90,
        borderRadius: 10
    },
    bill: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',

        margin: 10
    },
    branch: {
        fontSize: 17,
        fontWeight: 'bold',
        color: colors.textPrimary
    },
    text: {
        fontSize: 13,
        color: colors.darkGray
    },
    price: {
        color: colors.textExtra,
        fontSize: 15,
        fontWeight: '700'
    },
    status: {
        color: colors.white,
        fontSize: 12,
        // backgroundColor: colors.green,
        padding: 5,
        borderRadius: 20
    }
})