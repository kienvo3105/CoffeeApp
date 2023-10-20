import { StyleSheet, FlatList, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Coins from '../../components/MemberCardMenu/Coins';

import { useGet } from '../../api';
import { userSelector } from '../../redux/selectors';
import { useSelector } from 'react-redux';

import CouponItem from '../../components/MemberCardMenu/CouponItem';

const Coupon = () => {
    const { isError, result, fetchGet } = useGet();
    const user = useSelector(userSelector);
    const [coupon, setCoupon] = useState([]);

    useEffect(() => {
        const getCoupon = async () => {
            await fetchGet(`user/${user.id}/discount`);
        }
        getCoupon();
    }, [])

    useEffect(() => {
        if (result && !isError)
            setCoupon(result.discounts);
    }, [result])

    return (
        <View style={styles.container}>
            <Coins />
            <FlatList
                showsVerticalScrollIndicator={false}
                style={{ height: 420 }}
                data={coupon}
                keyExtractor={item => item.userDiscountId}
                renderItem={({ item }) => <CouponItem item={item} />}
            />
        </View>
    )
}

export default Coupon

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        marginBottom: 10,
        marginHorizontal: 10
    }
})