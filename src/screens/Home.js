import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import TopBar from '../components/Common/TopBar'
import RatingCard from '../components/Home/RatingCard'
import ItemCategory from '../components/Common/ItemCategory'
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
    }
]

const renderItem = ({ item }) => {
    return (<ItemCategory url={item.img} name={item.name} handlePressItem={() => console.log("press category")} />)
}

const Home = () => {
    return (
        <View style={styles.container}>
            <TopBar />
            <RatingCard />
            <FlatList

                style={styles.list}
                data={itemCategory}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    list: {
        backgroundColor: colors.white,
        paddingTop: 20,
        height: 100,
        flexGrow: 0
    }
})