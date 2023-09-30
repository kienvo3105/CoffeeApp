import { StyleSheet, ScrollView, View, FlatList, Text } from 'react-native'
import React from 'react'
import TopBar from '../components/Common/TopBar'
import RatingCard from '../components/Home/RatingCard'
import ItemCategory from '../components/Home/ItemCategory'
import Promotion from '../components/Home/Promotion'
import AdBanner from '../components/Home/AdBanner'
import BestProduct from '../components/Home/BestProduct'
import Cart from '../components/Common/Cart/Cart'

import { colors } from '../constants/color'

import { itemBestSeller, itemCategory, itemPromotion } from '../assets/data/data'

const renderItemCategory = ({ item }) => {
    return (<ItemCategory url={item.img} name={item.name} category={item.id} />)
}

const renderItemPromotion = ({ item }) => {
    return (<Promotion url={item.img} title={item.title} date={item.date} handlePressItem={() => console.log("press promotion")} />)
}

const renderItemProduct = ({ item }) => {
    return (<BestProduct url={item.img} title={item.title} price={item.price} handlePressItem={() => console.log("press product")} />)
}


const Home = () => {
    return (
        <View style={styles.container}>
            <TopBar />
            <ScrollView>
                <View style={{ backgroundColor: "#f1e2b5", }}>
                    <RatingCard />
                </View>

                {/* menu */}
                <FlatList
                    style={styles.menu}
                    data={itemCategory}
                    renderItem={renderItemCategory}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
                {/* promote */}
                <FlatList
                    style={styles.listPromote}
                    data={itemPromotion}
                    renderItem={renderItemPromotion}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
                {/* Banner */}
                <AdBanner />
                {/* best seller */}
                <Text style={styles.textSeller}>Sản Phẩm Bán Chạy</Text>
                {/* <BestProduct /> */}
                <FlatList
                    style={styles.listProduct}
                    data={itemBestSeller}
                    renderItem={renderItemProduct}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />

            </ScrollView>
            <View style={styles.cart}>

                <Cart />
            </View>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    menu: {
        backgroundColor: colors.white,
        paddingTop: 20,
        height: 110,
        flexGrow: 0
    },
    listPromote: {
        backgroundColor: colors.white,
        marginTop: 10,
        marginBottom: 15,
        flexGrow: 0
    },
    textSeller: {
        margin: 15,
        color: colors.textPrimary,
        fontSize: 17,
        fontWeight: 'bold'
    },
    listProduct: {
        marginBottom: 80,
        flexGrow: 0
    },
    cart: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    }
})