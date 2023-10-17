import { StyleSheet, Text, View, FlatList, TouchableOpacity, } from 'react-native';
import React, { useEffect, useState } from 'react';
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons';

import ItemProduct from '../Order/ItemProduct';
import ItemProductGrid from '../Order/ItemProductGrid';

import { colors } from '../../constants/color';


const SearchList = ({ listProduct }) => {
    const [typeArrange, setTypeArrange] = useState('list');

    const renderItemProduct = ({ item }) => {
        return (<ItemProduct item={item} sizeList={item.sizeList} />)
    }

    const renderItemProductGrid = ({ item }) => {
        return (<ItemProductGrid item={item} sizeList={item.sizeList} />)
    }

    const HorizontalLineSeparator = () => {
        return <View style={{ height: 1, backgroundColor: '#dedede', marginHorizontal: 20 }} />;
    };

    return (
        <View style={styles.container}>
            {/* product list */}
            <View style={[styles.titleBar, { justifyContent: 'flex-end', alignItems: 'center' }]}>
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

export default SearchList;

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