import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../../constants/color'
import { formatCurrency, convertDate } from '../../helpers/helper'
const CouponItem = ({ item }) => {
    const { image, code, discount } = item;
    const expirationDate = new Date(item.expirationDate)
    return (
        <View style={styles.container}>
            <Image source={{ uri: image }} resizeMode='contain' style={styles.image} />
            <View style={{ marginHorizontal: 5, flex: 1 }}>
                <Text style={{ fontSize: 15, fontWeight: 'bold', color: colors.textPrimary }}>Giảm {formatCurrency(discount)}</Text>
                <Text style={{ fontSize: 13, color: colors.darkGray, backgroundColor: colors.background, width: 80, height: 20, textAlignVertical: 'center', textAlign: 'center', borderRadius: 20, marginVertical: 5 }}>{code}</Text>
                <View style={{ borderTopWidth: 1, borderTopColor: colors.gray }} />
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Text style={{ fontSize: 12, color: colors.primary }}>HSD: {convertDate(expirationDate)}</Text>
                </View>
            </View>
        </View>
    )
}

export default CouponItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        marginBottom: 5,
        padding: 5,
        borderRadius: 10
    },
    image: {
        height: 80,
        width: 80
    }
})