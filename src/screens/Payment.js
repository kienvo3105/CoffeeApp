import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions, Alert } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'

import { colors } from '../constants/color'
import Ionicons from 'react-native-vector-icons/Ionicons'

import ItemMethodOrder from '../components/Payment/ItemMethodOrder'
import ItemProductCart from '../components/Payment/ItemProductCart'
import PaymentBar from '../components/Payment/PaymentBar'

import { Icon } from '@rneui/themed';

import { formatCurrency } from '../helpers/helper'

import { useSelector, useDispatch } from 'react-redux'
import cartSlice from '../redux/cartSlice'
import { itemsCartSelector, branchSelectedSelector, numberCartSelector, userSelector } from '../redux/selectors'

import { usePost } from '../api'

import { SwipeRow } from 'react-native-swipe-list-view';


const windowWidth = Dimensions.get('window').width;


const Payment = ({ navigation }) => {
    const dispatch = useDispatch();
    const { isError, isLoading, fetchPost, result } = usePost();
    const user = useSelector(userSelector);
    const listProductCart = useSelector(itemsCartSelector);
    const branchSelected = useSelector(branchSelectedSelector);
    const totalItemCart = useSelector(numberCartSelector)
    const [selectedMethod, setSelectedMethod] = useState("Mang Về");
    const [note, setNote] = useState("");
    const price = listProductCart.reduce((sum, itemCurrent) => sum + itemCurrent.price, 0);

    const swipeRowRefs = useRef([]);

    const handlePressPayment = async (finalPrice) => {
        const formatItems = listProductCart.map(item => {
            const { id, productName, ...newItem } = item
            return newItem
        })
        const order = {
            branchId: branchSelected.id,
            price: price,
            discount: 0,
            quantity: totalItemCart,
            finalPrice: price,
            noted: note,
            deliveryMethod: selectedMethod === "Mang Về" ? "mv" : (selectedMethod === "Tại Bàn" ? "tc" : "vc"),
            products: formatItems
        }
        await fetchPost(`order/user/${user.id}`, order);

    }

    // Function to delete an item from the list 
    const deleteItem = (rowKey, rowIndex) => {
        Alert.alert(
            'Xác nhận xóa',
            'Bạn có chắc muốn xóa?',
            [
                {
                    text: 'Hủy',
                    onPress: () => {
                        // Thực hiện hàm hủy ở đây
                        swipeRowRefs.current[rowIndex].closeRow();
                    },
                    style: 'cancel',
                },
                {
                    text: 'OK',
                    onPress: () => {
                        // Thực hiện hàm xóa ở đây
                        dispatch(cartSlice.actions.deleteItem(rowKey))
                    },
                },
            ]
        );

    };

    const handleClearCart = () => {
        dispatch(cartSlice.actions.clearCart())
        navigation.navigate("Order");
    }

    useEffect(() => {
        if (result && !isError) {
            dispatch(cartSlice.actions.clearCart());
            alert('Đặt hàng thành công!');
            navigation.navigate('Home');
        }
    }, [result])

    return (
        <View style={{ flex: 1 }}>
            {/* back bar */}
            <View style={styles.backBar}>
                <Ionicons name='chevron-back' size={20} color={colors.textPrimary} onPress={() => navigation.goBack()} style={{ flex: 1 }} />
                <Text style={{ flex: 3, fontSize: 18, color: colors.textPrimary, fontWeight: 'bold', textAlign: 'center' }}>Giỏ hàng</Text>
                <TouchableOpacity onPress={handleClearCart}>
                    <Text style={{ color: 'red', fontSize: 14, fontWeight: 'bold' }}>Xóa Giỏ Hàng</Text>
                </TouchableOpacity>
            </View >

            <ScrollView>
                {/* info order */}
                <View style={styles.frame}>
                    {/* method order */}
                    <View style={styles.row}>
                        <Text style={styles.title}>Phương thức:</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <ItemMethodOrder selected={selectedMethod} handleSelect={(method) => setSelectedMethod(method)} title={"Tại Bàn"} />
                            <ItemMethodOrder selected={selectedMethod} handleSelect={(method) => setSelectedMethod(method)} title={"Mang Về"} />
                        </View>
                    </View>

                    <View style={styles.line} />

                    {/* address */}
                    <TouchableOpacity >
                        <View style={styles.row}>
                            <Text style={styles.content}>{branchSelected.name}</Text>
                            <Text style={styles.content}>{branchSelected.Manager.phoneNumber}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.contentExtra}>{`${branchSelected?.Address.houseNumber} ${branchSelected?.Address.street}\n${branchSelected?.Address.commune}, ${branchSelected?.Address.district}`}</Text>
                            <Ionicons name='chevron-forward' size={15} color={colors.textPrimary} />
                        </View>
                    </TouchableOpacity>

                    <View style={styles.line} />

                    {/* Time order*/}
                    <TouchableOpacity style={styles.row}>
                        <View style={styles.row}>
                            <Ionicons name='time-outline' size={17} color={colors.primary} style={{ marginRight: 5 }} />
                            <Text style={styles.title}>Hôm nay - 11:48</Text>
                        </View>
                        <Ionicons name='chevron-forward' size={15} color={colors.textPrimary} />
                    </TouchableOpacity>

                    <View style={styles.line} />

                    {/* note */}
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name='edit-note' color={colors.primary} size={25} />
                        <Text style={{ fontSize: 13, color: colors.darkGray }}>Ghi chú đơn hàng</Text>
                    </TouchableOpacity>
                </View>

                {/* list product */}
                <View style={styles.frame}>
                    {/* title */}
                    <View style={styles.row}>
                        <Text style={styles.title}>Danh sách sản phẩm</Text>
                        <TouchableOpacity>
                            <Text style={[styles.title, { color: colors.primary }]}>Thêm sản phẩm</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.line} />

                    {/* list product item */}
                    {/* {listProductCart.map((item, index) => {
                        return (
                            <View key={item.id}>
                                <ItemProductCart item={item} />
                                {index < listProductCart.length - 1 &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <View style={[styles.line, { width: '90%' }]} />
                                    </View>}
                            </View>

                        )
                    })} */}
                    {/* SwipeListView */}
                    {listProductCart.map((item, index) => {
                        return (
                            <View key={item.id}>
                                <SwipeRow
                                    ref={(ref) => (swipeRowRefs.current[index] = ref)} // Gán tham chiếu cho mỗi SwipeRow
                                    // leftOpenValue={75}
                                    rightOpenValue={- windowWidth + 50}
                                    disableRightSwipe
                                    onRowOpen={() => deleteItem({ id: item.id, quantity: item.quantity }, index)}
                                >
                                    <View style={styles.hiddenContainer}>
                                        <TouchableOpacity
                                            style={[styles.hiddenButton, styles.deleteButton]}
                                            onPress={() => deleteItem(item.id)}
                                        >
                                            <Text style={styles.buttonText}>Delete</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ backgroundColor: 'white' }}>
                                        <ItemProductCart item={item} />
                                    </View>
                                </SwipeRow>
                                {index < listProductCart.length - 1 &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <View style={[styles.line, { width: '90%' }]} />
                                    </View>}
                            </View>
                        )
                    })}
                </View>

                {/* total price and discount */}
                <View style={styles.frame}>
                    {/* total price */}
                    <View style={styles.row}>
                        <Text style={styles.title}>Tạm tính</Text>
                        <Text style={styles.title}>{formatCurrency(price)}</Text>
                    </View>

                    <View style={styles.line} />

                    {/* discount */}
                    <View style={styles.row}>
                        <Text style={[styles.title, { fontWeight: 'normal' }]}>Khuyến mãi</Text>
                        <TouchableOpacity>
                            <Text style={[styles.title, { color: colors.primary }]}>Thêm khuyến mãi</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* final price */}
                <View style={[styles.frame, styles.row, { marginBottom: 10 }]}>
                    <Text style={[styles.title, { fontSize: 18 }]}>Tổng cộng</Text>
                    <Text style={[styles.title, { fontSize: 18 }]}>{formatCurrency(price)}</Text>
                </View>
            </ScrollView>

            {/* Payment bar */}
            <PaymentBar navigation={navigation} totalPrice={formatCurrency(price)} handlePressPayment={handlePressPayment} />
        </View >
    )
}

export default Payment

const styles = StyleSheet.create({
    backBar: {
        height: 40,
        paddingVertical: 5,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.white
    },
    frame: {
        backgroundColor: colors.white,
        marginTop: 10,
        marginHorizontal: 10,
        padding: 10,
        borderRadius: 10
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: { color: colors.textPrimary, fontSize: 16, fontWeight: 'bold' },
    content: {
        color: colors.textPrimary,
        fontSize: 14,

    },
    contentExtra: {
        color: colors.textExtra,
        fontSize: 13,

    },
    line: {
        borderTopWidth: 1,
        borderColor: colors.gray,
        marginVertical: 10
    },
    hiddenContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'stretch',
        backgroundColor: '#E74C3C',
        paddingRight: 20
        // height: 80,
        // borderRadius: 20,
    },
    hiddenButton: {
        justifyContent: 'center',
        // alignItems: 'center',
        // width: 50,
        // height: 50,
    },
    deleteButton: {
        backgroundColor: '#E74C3C', // Red 
        // borderRadius: 20,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
})