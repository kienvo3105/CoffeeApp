import { StyleSheet, View } from 'react-native'
import React from 'react'

import CloseBar from '../components/Common/CloseBar'
import ProductList from '../components/Order/ProductList'
import BarCart from '../components/Order/BarCart'
import { itemProduct } from '../assets/data/data'


const ListProductScreen = ({ route, navigation }) => {
    const { categoryID, categoryName } = route.params;
    return (
        <View style={styles.container}>
            <CloseBar title={categoryName} navigation={navigation} />
            <ProductList selected={{ id: categoryID, name: categoryName }} listProduct={itemProduct[categoryID]} check="screen" />
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