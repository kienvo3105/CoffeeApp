import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'

import { colors } from '../constants/color'
import Ionicons from 'react-native-vector-icons/Ionicons'

import ItemMethodOrder from '../components/Payment/ItemMethodOrder'
import ItemProductCart from '../components/Payment/ItemProductCart'
import PaymentBar from '../components/Payment/PaymentBar'

import { Icon } from '@rneui/themed';

import { listProductCart } from '../assets/data/data'
import { formatCurrency } from '../helpers/helper'

const Payment = ({ navigation }) => {
    const [selectedMethod, setSelectedMethod] = useState("Mang Về");
    const [note, setNote] = useState("");
    return (
        <View style={{ flex: 1 }}>
            {/* back bar */}
            <View style={styles.backBar}>
                <Ionicons name='chevron-back' size={20} color={colors.textPrimary} onPress={() => navigation.goBack()} style={{ flex: 1 }} />
                <Text style={{ flex: 3, fontSize: 18, color: colors.textPrimary, fontWeight: 'bold', textAlign: 'center' }}>Giỏ hàng</Text>
                <TouchableOpacity>
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
                            <Text style={styles.content}>Citi Ground</Text>
                            <Text style={styles.content}>028 7101 5666</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.contentExtra}>{`60A Trường Sơn\nP.2, Q. Tan Binh`}</Text>
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
                    {listProductCart.map((item, index) => {
                        return (
                            <>
                                <ItemProductCart item={item} key={item.id} />
                                {index < listProductCart.length - 1 &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <View style={[styles.line, { width: '90%' }]} />
                                    </View>}
                            </>

                        )
                    })}
                </View>

                {/* total price and discount */}
                <View style={styles.frame}>
                    {/* total price */}
                    <View style={styles.row}>
                        <Text style={styles.title}>Tạm tính</Text>
                        <Text style={styles.title}>{formatCurrency(listProductCart.reduce((sum, itemCurrent) => sum + itemCurrent.totalPrice, 0))}</Text>
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
                    <Text style={[styles.title, { fontSize: 18 }]}>{formatCurrency(listProductCart.reduce((sum, itemCurrent) => sum + itemCurrent.totalPrice, 0))}</Text>
                </View>
            </ScrollView>

            {/* Payment bar */}
            <PaymentBar navigation={navigation} totalPrice={formatCurrency(listProductCart.reduce((sum, itemCurrent) => sum + itemCurrent.totalPrice, 0))} />
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

})