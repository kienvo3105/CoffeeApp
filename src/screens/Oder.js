import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import React, { useState } from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { colors } from '../constants/color';
import ItemCategoryOrder from '../components/Order/ItemCategoryOrder';

const itemCategory = [
    {
        id: 1,
        name: 'CÀ PHÊ TRUYỀN THỐNG',
        img: require("../assets/image/category/1.png")
    },
    {
        id: 2, name: 'CÀ PHÊ PHA MÁY', img: require("../assets/image/category/2.png")
    },
    {
        id: 3, name: "Trà", img: require("../assets/image/category/3.png")
    },
    {
        id: 4, name: "Đá xây", img: require("../assets/image/category/4.png")
    },
    {
        id: 5,
        name: 'Cà phê tt',
        img: require("../assets/image/category/1.png")
    },
    {
        id: 6, name: 'Cà phê máy', img: require("../assets/image/category/2.png")
    },
    {
        id: 7, name: "Trà", img: require("../assets/image/category/3.png")
    },
    {
        id: 8, name: "Đá xây", img: require("../assets/image/category/4.png")
    }
]


const Oder = () => {
    const [selected, setSelected] = useState(1);

    const renderItemCategory = ({ item }) => {
        return (<ItemCategoryOrder url={item.img} name={item.name} handlePressItem={(itemId) => setSelected(itemId)} id={item.id} selected={selected} />)
    };

    return (
        <Pressable style={styles.container}>
            <View style={styles.searchBar}>
                <Text style={styles.titleSearch}>Tìm kiếm tên món ăn</Text>
                <Ionicons name='search' size={20} color={'#dedede'} />
            </View>

            <FlatList
                style={styles.menu}
                data={itemCategory}
                renderItem={renderItemCategory}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </Pressable>
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
    }
});