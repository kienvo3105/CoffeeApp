import { StyleSheet, Text, View, FlatList, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'

import Coins from '../../components/MemberCardMenu/Coins'
import { colors } from '../../constants/color'
import ExchangeCoinItem from '../../components/MemberCardMenu/ExchangeCoinItem'

import { useGet, usePost } from '../../api';
import { useDispatch, useSelector } from 'react-redux';
import userSlice from '../../redux/userSlice'
import { userSelector } from '../../redux/selectors'

const ExchangeCoin = () => {
    const dispatch = useDispatch();
    const { isError: isErrorCoupon, result: resultCoupon, fetchGet: fetchGetCoupon } = useGet();
    const { isError: isErrorUser, result: resultUser, fetchGet: fetchGetUser } = useGet();
    const { isError, result, fetchPost } = usePost();

    const user = useSelector(userSelector);
    const [listExchangeCoin, setListExchangeCoin] = useState([]);

    const handleChangeCoupon = async (numberCoupon, couponId, costChange) => {
        if (costChange * numberCoupon <= user.coins)
            await fetchPost(`user/${user.id}/discount`, { couponId, numberCoupon });
        else
            Alert.alert("Thông báo", "Không đủ coins để đổi coupon!")
    }

    useEffect(() => {
        const getCoupon = async () => {
            await fetchGetCoupon("discount");
        }
        getCoupon();
    }, [])

    useEffect(() => {
        if (resultCoupon && !isErrorCoupon)
            setListExchangeCoin(resultCoupon.discounts);
    }, [resultCoupon])

    useEffect(() => {
        const checkFetchPost = async () => {
            if (result && !isError)
                await fetchGetUser(`user/${user.id}`);
        }
        checkFetchPost();
    }, [result])

    useEffect(() => {
        if (resultUser && !isErrorUser) {
            dispatch(userSlice.actions.userChange(resultUser.user))
            Alert.alert("Đổi coupon thành công");
        }
    }, [resultUser])

    return (
        <View style={styles.container}>
            <Coins />

            <Text style={{ fontSize: 15, fontWeight: 'bold', color: colors.textPrimary, marginBottom: 10 }}>Phần thưởng khả dụng</Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                style={{ height: 420 }}
                data={listExchangeCoin}
                keyExtractor={item => item}
                renderItem={({ item }) => <ExchangeCoinItem item={item} handleChangeCoupon={handleChangeCoupon} />}
            />

        </View>
    )
}

export default ExchangeCoin

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        marginBottom: 10,
        marginHorizontal: 10
    }
})