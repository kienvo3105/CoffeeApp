import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import AntDesign from 'react-native-vector-icons/AntDesign'
import { colors } from '../../constants/color'

const PaymentBar = ({ totalPrice, handlePressPayment, navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.contentHeader}>
                    <Image source={require("../../assets/image/icon/momo.png")} resizeMode='contain' style={styles.image} />
                    <Text style={styles.text}>MoMo</Text>
                </TouchableOpacity>
                <View style={{ borderLeftWidth: 1, marginRight: 10, borderColor: colors.gray }} />
                <TouchableOpacity style={[styles.contentHeader]} onPress={() => navigation.navigate("Voucher")}>
                    <AntDesign name='tags' size={30} color={colors.primary} />
                    <Text style={styles.text}>Khuyến mãi</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.viewOrder}
                onPress={handlePressPayment}>
                <Text style={styles.order}>ĐẶT HÀNG ({totalPrice})</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PaymentBar

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        padding: 15,
        // flex: 1,
    },
    image: {
        height: 25,
        width: 25,
        borderRadius: 5
    },
    header: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    contentHeader: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center'
    },
    text: {
        fontSize: 15,
        color: colors.textPrimary,
        fontWeight: 'bold',
        marginLeft: 10
    },
    viewOrder: {
        backgroundColor: colors.primary,
        paddingVertical: 10,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25
    },
    order: {
        // width: '90%',
        fontSize: 17,
        color: colors.white,
        fontWeight: 'bold',
    }
})