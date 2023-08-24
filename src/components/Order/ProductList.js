import { StyleSheet, Text, View, FlatList, TouchableOpacity, } from 'react-native';
import React, { useState } from 'react';
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons';

import Cart from '../Common/Cart';
import ItemProduct from './ItemProduct';
import ItemProductGrid from './ItemProductGrid';
import LocationModal from './LocationModal';

import { colors } from '../../constants/color';

const ProductList = ({ selected, listProduct, check }) => {
    const [typeArrange, setTypeArrange] = useState('list');
    const [showSelectLocation, setShowSelectLocation] = useState(false);
    const [selectedMethod, setSelectedMethod] = useState("Tại bàn")

    const renderItemProduct = ({ item }) => {
        return (<ItemProduct item={item} />)
    }

    const renderItemProductGrid = ({ item }) => {
        return (<ItemProductGrid item={item} handlePressItem={(itemName, price) => console.log(itemName, price)} />)
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
            {/* bar cart */}
            <View style={styles.barCart}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', width: '75%' }} onPress={() => setShowSelectLocation(true)}>
                    <Ionicons name='location' size={20} color={colors.white} style={{ paddingRight: 5 }} />
                    <View >
                        <Text style={{ fontSize: 12, color: colors.white }}>{selectedMethod}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: colors.white, paddingRight: 5 }}>Citi Ground</Text>
                            <Ionicons name='chevron-down-outline' size={14} color={colors.white} />
                        </View>
                    </View>
                </TouchableOpacity>
                <Cart />
            </View>
            {/* Modal location */}
            <LocationModal
                visibleModal={showSelectLocation}
                handleCloseModal={(visible) => setShowSelectLocation(visible)}
                handelSetMethod={(method) => { setSelectedMethod(method); setShowSelectLocation(false) }}
                selectedMethod={selectedMethod} />
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