import { StyleSheet, View, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'

import CloseBar from '../components/Common/CloseBar'
import ProductList from '../components/Order/ProductList'
import BarCart from '../components/Order/BarCart'

import { useGet } from '../api';

const ListProductScreen = ({ route, navigation }) => {
    const { fetchGet, isError, result } = useGet();
    const { categoryID, categoryName } = route.params;
    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchProducts = async () => {
            await fetchGet(`product/category/${categoryID}`);
        }
        fetchProducts();
    }, [])

    useEffect(() => {
        if (result)
            if (!isError) {
                setProducts(result.products);
            }
            else
                Alert.alert("Lỗi hiển thị sản phẩm!");
    }, [result])

    return (
        <View style={styles.container}>
            <CloseBar title={categoryName} navigation={navigation} />
            <ProductList selected={{ id: categoryID, name: categoryName }} listProduct={products} check="screen" />
            <BarCart />
        </View>
    )
}

export default ListProductScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})