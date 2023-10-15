import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import OrderItem from '../../components/History/OrderItem'
import { useGet } from '../../api'
import { useSelector } from 'react-redux'
import { userSelector } from '../../redux/selectors'




const OrderHistory = () => {
    const { isError, result, fetchGet } = useGet();
    const user = useSelector(userSelector);
    const [orders, setOrders] = useState([]);
    const [refreshing, setRefreshing] = useState(false);



    const onRefresh = async () => {
        setRefreshing(true);
        await getOrder();
        setRefreshing(false);
    };

    const getOrder = async () => {
        await fetchGet(`order/history/user/${user.id}`);
    }

    useEffect(() => {
        getOrder();
    }, [])
    useEffect(() => {
        if (result && !isError) {
            setOrders(result.orders);
        }
    }, [result])
    return (
        <View style={styles.container}>
            <FlatList
                onRefresh={onRefresh}
                refreshing={refreshing}
                data={orders}
                keyExtractor={item => item.id}
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