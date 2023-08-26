import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
import { SearchBar } from '@rneui/themed';
import { colors } from '../constants/color';
import Ionicons from 'react-native-vector-icons/Ionicons'
import ProductList from '../components/Order/ProductList';

import { itemProduct } from '../assets/data/data';

const Search = ({ navigation }) => {
    const [search, setSearch] = useState("");
    const [listProductSearch, setListProductSearch] = useState([]);
    const searchFunction = (text) => {
        if (text.length > 0) {
            setSearch(text);
            const data = Object.values(itemProduct);
            const product = [].concat(...data);
            console.log("🚀 ~ file: Search.js:17 ~ searchFunction ~ product:", product)
            const result = product.filter((item) => item.title.toLowerCase().search(text.toLowerCase()) !== -1)
            console.log("🚀 ~ file: Search.js:20 ~ searchFunction ~ result:", result.length)
            setListProductSearch(result)
        } else {
            setListProductSearch([])
            setSearch("")
        }

    }

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <Ionicons name='chevron-back' size={25} color={colors.textPrimary} onPress={() => navigation.goBack()} />
                <SearchBar
                    // platform='android'
                    placeholder="Tìm kiếm tên món ăn"
                    placeholderTextColor={colors.gray}
                    onChangeText={searchFunction}
                    value={search}
                    containerStyle={styles.searchBar}
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.inputStyle}
                />
                <View />
            </View>
            <ProductList check={"screen"} listProduct={listProductSearch} />
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingLeft: 10
    },
    searchBar: {
        backgroundColor: colors.white,
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: colors.gray,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainerStyle: {
        backgroundColor: colors.white,
        height: 30,
    },
    inputStyle: {
        fontSize: 14,
        color: colors.textPrimary
    }
})