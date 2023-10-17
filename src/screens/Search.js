import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react';
import { SearchBar } from '@rneui/themed';
import { colors } from '../constants/color';
import Ionicons from 'react-native-vector-icons/Ionicons'
import SearchList from '../components/Search/SearchList';


import { useGet } from '../api';

const Search = ({ navigation }) => {
    const { isError, result, isLoading, fetchGet } = useGet();
    const [search, setSearch] = useState("");
    const [listProductSearch, setListProductSearch] = useState([]);

    const searchFunction = async (text) => {
        setSearch(text);
        if (text.length > 0) {
            await fetchGet(`product/search?keyword=${text}`);
        } else {
            setListProductSearch([])
        }
    }

    useEffect(() => {
        if (result && !isError) {
            setListProductSearch(result.products);
        }
    }, [result])

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
            {
                isLoading ?
                    <ActivityIndicator size={'large'} color={colors.primary} />
                    :
                    (
                        listProductSearch.length === 0 ?
                            <Text style={{ fontSize: 15, color: colors.darkGray, textAlign: "center", marginTop: 15 }}>Không tìm thấy sản phẩm phù hợp</Text>
                            :
                            <SearchList listProduct={listProductSearch} />
                    )
            }
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