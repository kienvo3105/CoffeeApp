import { StyleSheet, FlatList, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { userSelector } from '../../redux/selectors';
import { useGet } from '../../api';
import ItemDiscount from '../../components/Payment/ItemDiscount';
import BackBar from '../../components/Common/BackBar';
import { useDispatch } from 'react-redux';
import cartSlice from '../../redux/cartSlice';
const Voucher = ({ navigation }) => {
    const dispatch = useDispatch();
    const { isError, result, fetchGet } = useGet();
    const user = useSelector(userSelector);
    const [coupon, setCoupon] = useState([]);

    useEffect(() => {
        const getCoupon = async () => {
            await fetchGet(`user/${user.id}/discount`);
        }
        getCoupon();
    }, []);

    useEffect(() => {
        if (result && !isError)
            setCoupon(result.discounts);
    }, [result]);

    const handleSelectDiscount = (item) => {
        dispatch(cartSlice.actions.selectDiscount(item));
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <BackBar title={"Khuyến mãi"} navigation={navigation} />
            <FlatList
                showsVerticalScrollIndicator={false}
                style={{ marginTop: 20 }}
                data={coupon}
                keyExtractor={item => item.userDiscountId}
                renderItem={({ item }) => <ItemDiscount item={item} handleSelectDiscount={handleSelectDiscount} />}
            />
        </View>
    )
}

export default Voucher

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})