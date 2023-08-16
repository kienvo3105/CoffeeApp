import { StyleSheet, ScrollView, View, FlatList, Text } from 'react-native'
import React from 'react'
import TopBar from '../components/Common/TopBar'
import RatingCard from '../components/Home/RatingCard'
import ItemCategory from '../components/Home/ItemCategory'
import Promotion from '../components/Home/Promotion'
import AdBanner from '../components/Home/AdBanner'
import BestProduct from '../components/Home/BestProduct'
import Cart from '../components/Common/Cart'


import { colors } from '../constants/color'

const itemCategory = [
    {
        id: 1,
        name: 'Cà phê tt',
        img: require("../assets/image/category/1.png")
    },
    {
        id: 2, name: 'Cà phê máy', img: require("../assets/image/category/2.png")
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

const itemPromotion = [
    { id: 1, title: "GIAM 10k", date: "11/8 - 30-8", img: require("../assets/image/promotion/1.jpg") },
    { id: 2, title: "MUA 1 TANG 1", date: "1/8 - 20-8", img: require("../assets/image/promotion/1.jpg") },
    { id: 3, title: "TANG 10k", date: "5/8 - 15-8", img: require("../assets/image/promotion/1.jpg") },
    { id: 4, title: "GIAM 10k", date: "11/8 - 30-8", img: require("../assets/image/promotion/1.jpg") },
    { id: 5, title: "GIAM 10k", date: "11/8 - 30-8", img: require("../assets/image/promotion/1.jpg") },
]

const itemBestSeller = [
    { id: 1, title: "Freeze Trà Xanh", price: 55000, img: require("../assets/image/category/4.png") },
    {
        id: 4,
        title: 'Cà phê tt',
        price: 30000,
        img: require("../assets/image/category/1.png")
    },
    {
        id: 2, title: 'Cà phê máy', price: 32000, img: require("../assets/image/category/2.png")
    },
    {
        id: 3, title: "Trà", price: 45000, img: require("../assets/image/category/3.png")
    },
]

const renderItemCategory = ({ item }) => {
    return (<ItemCategory url={item.img} name={item.name} handlePressItem={() => console.log("press category")} />)
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

                <RatingCard />

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
        height: 100,
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