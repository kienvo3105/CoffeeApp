import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import OrderItem from '../../components/History/OrderItem'



const orderList = [
    {
        id: 1,
        branch: {
            id: 1,
            name: 'Citi Ground',
            image: require("../../assets/image/branch/citiGround.jpg")
        },
        numberProduct: 4,
        totalPrice: "$30.5",
        status: "Finish",
        orderDate: new Date(2023, 8, 20, 10, 25) //new Date(year, month - 1, day, hours, minutes);
    },
    {
        id: 2,
        branch: {
            id: 1,
            name: 'Citi Ground',
            image: require("../../assets/image/branch/citiGround.jpg")
        },
        numberProduct: 1,
        totalPrice: "$4",
        status: "Finish",
        orderDate: new Date(2023, 8, 20, 11, 16)
    },
    {
        id: 3,
        branch: {
            id: 2,
            name: 'Big C an lac',
            image: require("../../assets/image/branch/citiGround.jpg")
        },
        numberProduct: 5,
        totalPrice: "$40",
        status: "Finish",
        orderDate: new Date(2023, 8, 20, 12, 16)
    },]


const OrderHistory = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={orderList}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <OrderItem item={item} />}
            />
        </View>
    )
}

export default OrderHistory

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})