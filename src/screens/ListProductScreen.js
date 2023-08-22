import { StyleSheet, View } from 'react-native'
import React from 'react'

import BackBar from '../components/Common/BackBar'
import ProductList from '../components/Order/ProductList'
import { itemProduct } from '../assets/data/data'

const ListProductScreen = ({ route, navigation }) => {
    const { categoryID, categoryName } = route.params;
    return (
        <View style={styles.container}>
            <BackBar title={categoryName} navigation={navigation} />
            <ProductList selected={{ id: categoryID, name: categoryName }} listProduct={itemProduct[categoryID]} check="screen" />
        </View>
    )
}

export default ListProductScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})