import { StyleSheet, Text, View, Pressable, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';


import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather'
import { colors } from '../constants/color';
import ItemCategoryOrder from '../components/Order/ItemCategoryOrder';
import ItemProduct from '../components/Order/ItemProduct';
import ItemProductGrid from '../components/Order/ItemProductGrid';
import Cart from '../components/Common/Cart';
import LocationModal from '../components/Order/LocationModal';

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
        id: 3, name: "TRÀ", img: require("../assets/image/category/3.png")
    },
    {
        id: 4, name: "ĐÁ XÂY", img: require("../assets/image/category/4.png")
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

const itemProduct = {
    1: [{
        id: 3,
        title: 'Phin Sữa Đá',
        describe: 'Hương vị cà phê Việt Nam đích thực! Từng hạt cà phê hảo hạng được chọn bằng tay, phối trộn độc đáo giữa hạt Robusta từ cao nguyên Việt Nam, thêm Arabica thơm lừng. Cà phê được pha từ Phin truyền thống, hoà cùng sữa đặc sánh và thêm vào chút đá tạo nên ly Phin Sữa Đá – Đậm Đà Chất Phin.',
        price: "$" + ((Math.floor(Math.random() * ((+5) - (+1) + 1)) + (+1)).toFixed()) + " ",
        image: require('../assets/image/product/3.png'),
        category_id: 1
    }],
    2: [{
        id: 1,
        title: 'Trà Sen Vàng',
        describe: 'Một sự kết hợp thú vị giữa trà đen, những quả vải thơm ngon và thạch giòn khó cưỡng, mang đến thức uống tuyệt hảo!',
        price: "$" + ((Math.floor(Math.random() * ((+5) - (+1) + 1)) + (+ 1)).toFixed()),
        image: require('../assets/image/product/1.png'),
        category_id: 2
    }, {
        id: 2,
        title: 'FREEZE Trà Xanh',
        describe: 'Thức uống rất được ưa chuộng! Trà xanh thượng hạng từ cao nguyên Việt Nam, kết hợp cùng đá xay, thạch trà dai dai, thơm ngon và một lớp kem dày phủ lên trên vô cùng hấp dẫn. Freeze Trà Xanh thơm ngon, mát lạnh, chinh phục bất cứ ai!    ',
        price: "$" + ((Math.floor(Math.random() * ((+5) - (+1) + 1)) + (+1)).toFixed()) + " ",
        image: require('../assets/image/product/2.png'),
        category_id: 2
    },
    {
        id: 4,
        title: 'Phin Sữa Đá',
        describe: 'Hương vị cà phê Việt Nam đích thực! Từng hạt cà phê hảo hạng được chọn bằng tay, phối trộn độc đáo giữa hạt Robusta từ cao nguyên Việt Nam, thêm Arabica thơm lừng. Cà phê được pha từ Phin truyền thống, hoà cùng sữa đặc sánh và thêm vào chút đá tạo nên ly Phin Sữa Đá – Đậm Đà Chất Phin.',
        price: "$" + ((Math.floor(Math.random() * ((+5) - (+1) + 1)) + (+1)).toFixed()) + " ",
        image: require('../assets/image/product/3.png'),
        category_id: 2
    }]
}

const Oder = () => {
    const [selected, setSelected] = useState({ id: itemCategory[0].id, name: itemCategory[0].name });
    const [listProduct, setListProduct] = useState(itemProduct[1]);
    const [typeArrange, setTypeArrange] = useState('list');
    const [showSelectLocation, setShowSelectLocation] = useState(false);
    const [selectedMethod, setSelectedMethod] = useState("Tại bàn")
    const renderItemCategory = ({ item }) => {
        return (<ItemCategoryOrder url={item.img} name={item.name} id={item.id} selected={selected.id}
            handlePressItem={(id, name) => {
                setSelected({ id, name })
                setListProduct(itemProduct[id])
            }} />)
    };

    const renderItemProduct = ({ item }) => {
        return (<ItemProduct item={item} handlePressItem={(itemName, price) => console.log(itemName, price)} />)
    }

    const renderItemProductGrid = ({ item }) => {
        return (<ItemProductGrid item={item} handlePressItem={(itemName, price) => console.log(itemName, price)} />)
    }

    const HorizontalLineSeparator = () => {
        return <View style={{ height: 1, backgroundColor: '#dedede', marginHorizontal: 20 }} />;
    };
    return (
        <View style={styles.container}>
            {/* search bar */}
            <View style={styles.searchBar}>
                <Text style={styles.titleSearch}>Tìm kiếm tên món ăn</Text>
                <Ionicons name='search' size={20} color={'#dedede'} />
            </View>

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
            <View style={styles.titleBar}>
                <Text style={styles.textTitle}>{selected.name}</Text>
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
    titleBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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
        justifyContent: 'space-between',
    },
    barCart: {
        backgroundColor: colors.primary,
        paddingHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },

});