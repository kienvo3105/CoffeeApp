import { StyleSheet, Text, View, FlatList, TouchableOpacity, } from 'react-native';
import React, { useEffect, useState } from 'react';
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons';

import ItemProduct from './ItemProduct';
import ItemProductGrid from './ItemProductGrid';

import { colors } from '../../constants/color';
import { useSelector } from 'react-redux';
import { categoriesSelector } from '../../redux/selectors';

const ProductList = ({ selected, listProduct, check }) => {
    const [typeArrange, setTypeArrange] = useState('list');
    const categories = useSelector(categoriesSelector);
    const [sizeList, setSizeList] = useState([]);

    useEffect(() => {
        const categorySelected = categories.find((category) => category.id === selected.id)
        setSizeList(categorySelected.Sizes);
    }, [])


    const renderItemProduct = ({ item }) => {
        return (<ItemProduct item={item} sizeList={sizeList} />)
    }

    const renderItemProductGrid = ({ item }) => {
        return (<ItemProductGrid item={item} sizeList={sizeList} />)
    }

    const HorizontalLineSeparator = () => {
        return <View style={{ height: 1, backgroundColor: '#dedede', marginHorizontal: 20 }} />;
    };
    return (
        <View style={styles.container}>
            {/* product list */}
            <View style={[styles.titleBar, { justifyContent: check !== "screen" ? 'space-between' : 'flex-end' }]}>
                {check !== "screen" ? <Text style={styles.textTitle}>{selected.name}</Text> : null}
                <View style={styles.iconArrange}>
                    <Feather name='menu' size={30} color={typeArrange === 'list' ? colors.primary : colors.gray} onPress={() => setTypeArrange('list')} />
                    <Ionicons name='grid-sharp' size={25} color={typeArrange !== 'list' ? colors.primary : colors.gray} onPress={() => setTypeArrange('grid')} />
                </View>
            </View>
            <View>

            </View>
            {typeArrange === 'list' ?
                <FlatList
                    data={listProduct}
                    renderItem={renderItemProduct}
                    keyExtractor={item => item.id.toString()}
                    ItemSeparatorComponent={HorizontalLineSeparator}
                />
                : <FlatList
                    data={listProduct}
                    key={`grid-${listProduct.length}`}
                    renderItem={renderItemProductGrid}
                    keyExtractor={item => item.id.toString()}
                    horizontal={false}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: '5%' }}
                    contentContainerStyle={{ marginHorizontal: ('5%') }}
                />}

        </View>
    )
}

export default ProductList;

const styles = StyleSheet.create({
    container: { flex: 1 },
    titleBar: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
    },
    textTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: colors.textPrimary,
    },
    iconArrange: {
        width: 67,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    barCart: {
        backgroundColor: colors.primary,
        paddingHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
})