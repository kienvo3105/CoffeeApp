import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors } from '../../constants/color';

const convertDate = (inputDate) => {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false, // 24-hour format
    };
    const formatter = new Intl.DateTimeFormat('vi-VN', options);
    return formatter.format(inputDate);
}

const OrderItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <Image source={item.branch.image} resizeMode='center' style={styles.image} />
            <View style={styles.bill}>
                <View style={{ justifyContent: 'space-between' }}>
                    <Text style={styles.branch}>{item.branch.name}</Text>
                    <Text style={styles.text}>{item.numberProduct} Products</Text>
                    <Text style={styles.text}>{convertDate(item.orderDate)}</Text>

                </View>
                <View style={{ justifyContent: 'space-around', }}>
                    <Text style={styles.price}>{item.totalPrice}</Text>
                    <Text style={[styles.status, { backgroundColor: item.status === 'Pending' ? colors.primary : colors.green }]}>{item.status}</Text>
                </View>
            </View>
        </View>
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