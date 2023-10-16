import { StyleSheet, ScrollView, View, FlatList, Text, Alert, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import TopBar from '../components/Common/TopBar'
import RatingCard from '../components/Home/RatingCard'
import ItemCategory from '../components/Home/ItemCategory'
import Promotion from '../components/Home/Promotion'
import AdBanner from '../components/Home/AdBanner'
import BestProduct from '../components/Home/BestProduct'
import Cart from '../components/Common/Cart/Cart'

import categorySlice from '../redux/categorySlice'
import { useDispatch, useSelector } from 'react-redux';
import { useGet } from '../api'
import { categoriesSelector } from '../redux/selectors'
import { colors } from '../constants/color'

import { itemPromotion } from '../assets/data/data'




const Home = ({ navigation }) => {
    const { fetchGet: fetchGetCategory, isError: isErrorCategory, result: resultCategory } = useGet();
    const { fetchGet: fetchGetBestSeller, isError: isErrorBestSeller, result: resultBestSeller } = useGet();
    const dispatch = useDispatch();
    const categories = useSelector(categoriesSelector);
    const [itemBestSeller, setItemBestSeller] = useState([]);

    const renderItemCategory = ({ item }) => {
        return (<ItemCategory url={item.image} name={item.name} category={item.id} />)
    }

    const renderItemPromotion = ({ item }) => {
        return (<Promotion url={item.img} title={item.title} date={item.date} handlePressItem={() => console.log("press promotion")} />)
    }

    const renderItemProduct = ({ item }) => {
        return (<BestProduct url={item.image} title={item.name} price={item.price} handlePressItem={() => navigation.navigate("ProductDetail", { ...item })} />)
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                await Promise.all([
                    fetchGetCategory("category"),
                    fetchGetBestSeller("product/best-seller"),
                ]);
            } catch (error) {
                console.error("Lỗi:", error);
            }
        }
        fetchData();
    }, [])

    useEffect(() => {
        if (resultCategory) {
            if (isErrorCategory)
                Alert.alert("Lỗi lấy dữ liệu!", "Vui lòng thử lại!");
            else {
                dispatch(categorySlice.actions.addCategory(resultCategory.allCategory));
            }
        }
    }, [resultCategory])

    useEffect(() => {
        if (resultBestSeller) {
            if (isErrorBestSeller)
                Alert.alert("Lỗi lấy dữ liệu!", "Vui lòng thử lại!");
            else {
                setItemBestSeller(resultBestSeller.products);
            }
        }
    }, [resultBestSeller])

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
                    data={categories}
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
        paddingTop: 10,
        height: 120,
        // paddingHorizontal: 5
        // flexGrow: 0
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