import { StyleSheet, Text, View, FlatList, TouchableOpacity, } from 'react-native';
import React, { useState } from 'react';


import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../constants/color';
import ItemCategoryOrder from '../components/Order/ItemCategoryOrder';
import BarCart from '../components/Order/BarCart';

import ProductList from '../components/Order/ProductList';

import { itemCategory, itemProduct } from '../assets/data/data';
import { useNavigation } from '@react-navigation/native'
const Oder = () => {
    const navigation = useNavigation();
    const [selected, setSelected] = useState({ id: itemCategory[0].id, name: itemCategory[0].name });
    const [listProduct, setListProduct] = useState(itemProduct[1]);

    const renderItemCategory = ({ item }) => {
        return (<ItemCategoryOrder url={item.img} name={item.name} id={item.id} selected={selected.id}
            handlePressItem={(id, name) => {
                setSelected({ id, name })
                setListProduct(itemProduct[id])
            }} />)
    };

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
                    data={itemCategory}
                    renderItem={renderItemCategory}
                    keyExtractor={item => item.id.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>

            {/* product list */}
            <ProductList selected={selected} listProduct={listProduct} />
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