import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert, } from 'react-native';
import React, { useEffect, useState } from 'react';


import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../constants/color';
import ItemCategoryOrder from '../components/Order/ItemCategoryOrder';
import BarCart from '../components/Order/BarCart';

import ProductList from '../components/Order/ProductList';
import { useSelector, useDispatch } from 'react-redux';
import categorySlice from '../redux/categorySlice';
import { categoriesSelector, categorySelectedSelector, productsSelector } from '../redux/selectors';
import { useNavigation } from '@react-navigation/native'

import { useGet } from '../api';

const Oder = () => {
    const navigation = useNavigation();
    const { isError, isLoading, result, fetchGet } = useGet();
    const dispatch = useDispatch();
    const selected = useSelector(categorySelectedSelector);
    const products = useSelector(productsSelector)
    const categories = useSelector(categoriesSelector)

    const renderItemCategory = ({ item }) => {
        return (<ItemCategoryOrder url={item.image} name={item.name} id={item.id} selected={selected.id}
            handlePressItem={(id, name) => {
                dispatch(categorySlice.actions.selectCategory({ id, name }));
            }} />)
    };

    useEffect(() => {
        const fetchProducts = async () => {
            await fetchGet(`product/category/${selected.id}`);
        }
        fetchProducts();
    }, [selected])

    useEffect(() => {
        if (result)
            if (!isError) {
                dispatch(categorySlice.actions.addProducts(result.products))
            }
            else
                Alert.alert("Lỗi xảy ra không thể hiển thị sản phẩm!");
    }, [result])

    return (
        <View style={styles.container}>
            {/* search bar */}
            <TouchableOpacity style={styles.searchBar}
                onPress={() => navigation.navigate("Search")}>
                <Text style={styles.titleSearch}>Tìm kiếm tên món ăn</Text>
                <Ionicons name='search' size={20} color={'#dedede'} />
            </TouchableOpacity>

            {/* menu */}
            <View>
                <FlatList
                    data={categories}
                    renderItem={renderItemCategory}
                    keyExtractor={item => item.id.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>

            {/* product list */}
            <ProductList selected={selected} listProduct={products} />
            <BarCart />
        </View>
    )
};

export default Oder;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    searchBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        marginVertical: 10,
        marginBottom: 20,
        marginHorizontal: 20,
        borderWidth: 1,
        padding: 5,
        borderRadius: 20,
        borderColor: '#dedede',
    },
    titleSearch: {
        color: '#dedede',
        fontSize: 12
    },

});