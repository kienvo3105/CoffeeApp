import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { colors } from '../../constants/color';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { convertDate } from '../../helpers/helper';
import { useGet } from '../../api';
import { Icon } from '@rneui/themed';
import { formatCurrency } from '../../helpers/helper';
import ProductOrderItem from '../../components/History/ProductOrderItem';

const Line = () => {
    return (
        <View style={styles.line} />
    )
}

const OrderDetail = ({ route, navigation }) => {
    const order = route.params.item;
    const {
        isError,
        result,
        fetchGet
    } = useGet();
    const [orderDetail, setOrderDetail] = useState([]);

    useEffect(() => {
        const getOrderDetail = async () => {
            await fetchGet(`order/${order.id}`)
        }
        getOrderDetail();
    }, [])

    useEffect(() => {
        if (result && !isError) {
            setOrderDetail(result.orderDetails);
        }
    }, [result])
    return (
        <View style={styles.container}>
            {/* back bar */}
            <View style={styles.backBar}>
                <Ionicons name='chevron-back' size={20} color={colors.textPrimary} onPress={() => navigation.goBack()} />
                <Text style={{
                    flex: 1,
                    fontSize: 18,
                    color: colors.textPrimary,
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}>{convertDate(Date.parse(order.orderDate))}</Text>
            </View >
            <ScrollView>

                {/* id order */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignorders: 'center', paddingHorizontal: 10, marginVertical: 5 }}>
                    <Text style={styles.textOrderId}>Mã đặt hàng</Text>
                    <Text style={styles.textOrderId}>{order.id}</Text>
                </View>

                {/* name Branch */}
                <View style={[styles.frame, { flexDirection: 'row' }]}>
                    <Image source={{ uri: order.Branch.image }} resizeMode='cover' style={styles.image} />
                    <View style={{ marginLeft: 15, justifyContent: 'space-between', alignorders: 'flex-start' }}>
                        <Text style={{ fontSize: 18, color: colors.textPrimary, fontWeight: 'bold' }}>{order.Branch.name}</Text>
                        <Text style={{ fontSize: 16, color: colors.textExtra }}>{order.deliveryMethod === "tc" ? "Tại chỗ" : (order.deliveryMethod === "mv" ? "Mang về" : "Giao hàng")}</Text>
                    </View>
                    <View style={{ justifyContent: "center", alignItems: 'flex-end', flex: 1 }}>
                        <Text style={{ fontSize: 16, color: order.OrderStatus.id === 't1' ? colors.primary : colors.green }}>{order.OrderStatus.name}</Text>
                    </View>

                </View>


                {/* đợi phát triển tính năng giao hàng */}
                {/* address  */}
                {/* <View style={styles.frame}>
                <View></View>
                <View></View>
            </View> */}

                {/* order detail */}
                <View style={styles.frame}>

                    {/* title */}
                    <View style={styles.row}>
                        <Text style={styles.title}>Danh sách sản phẩm</Text>
                        <TouchableOpacity>
                            <Text style={[styles.title, { color: colors.primary }]}>Đặt lại</Text>
                        </TouchableOpacity>
                    </View>

                    <Line />

                    {/* list product item */}
                    {orderDetail?.map((item, index) => {
                        return (
                            <View key={item.Product.id + item.Size.id + item.Product.quantity}>
                                <ProductOrderItem item={item} />
                                {index < orderDetail?.length - 1 &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <View style={[styles.line, { width: '90%' }]} />
                                    </View>}
                            </View>

                        )
                    })}
                    {order.noted !== "" &&
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <Icon name='edit-note' color={colors.primary} size={25} />
                            <Text style={{ fontSize: 15, color: colors.darkGray }}>{order.noted}</Text>
                        </View>}
                </View>

                {/* total price */}
                <View style={styles.frame}>
                    {/* total price */}
                    <View style={styles.row}>
                        <Text style={styles.title}>Tạm tính</Text>
                        <Text style={styles.title}>{formatCurrency(order.price)}</Text>
                    </View>

                    <View style={styles.line} />

                    {/* discount */}
                    <View style={styles.row}>
                        <Text style={[styles.title, { fontWeight: 'normal' }]}>Khuyến mãi</Text>

                        <Text style={[styles.title, { color: colors.primary }]}>{order.discount}</Text>

                    </View>
                </View>

                {/* final price */}
                <View style={[styles.frame, styles.row, { marginBottom: 10 }]}>
                    <Text style={[styles.title, { fontSize: 18 }]}>Tổng cộng</Text>
                    <Text style={[styles.title, { fontSize: 18 }]}>{formatCurrency(order.finalPrice)}</Text>
                </View>

                <View style={styles.frame}>
                    <Text style={styles.title}>Bạn nhận được {Math.floor(order.finalPrice / 10000)} coin</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default OrderDetail

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backBar: {
        height: 40,
        paddingVertical: 5,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.white
    },
    textOrderId: {
        fontSize: 13,
        color: colors.darkGray
    },
    line: {
        borderTopWidth: 1,
        borderColor: colors.gray,
        marginVertical: 10
    },
    frame: {
        backgroundColor: colors.white,
        marginTop: 10,
        // marginHorizontal: 10,
        padding: 15,
        // borderRadius: 10
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 100
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: { color: colors.textPrimary, fontSize: 16, fontWeight: 'bold' },
})