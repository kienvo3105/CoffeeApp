import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native'
import React, { useState } from 'react'
import TopBar from '../components/Common/TopBar'
import { SearchBar } from 'react-native-elements'
import { colors } from '../constants/color'

import BranchItem from '../components/Store/BranchItem'
import Map from '../components/Store/Map'


import Ionicons from 'react-native-vector-icons/Ionicons'

const branchList = [{
    id: 1,
    name: 'Sala 2',
    apartmentNumber: '125',
    street: 'Nguyễn Cơ Thạch',
    ward: 'P.An Loi Dong',
    district: 'Q.2',
    phoneNumber: '02871076465',
    openingTime: '7:00 - 23:00',
    image: require("../assets/image/branch/citiGround.jpg"),
    latLng: {
        latitude: 10.770422,
        longitude: 106.7190839,
    }
},
{
    id: 2,
    name: 'AQ',
    apartmentNumber: '39',
    street: 'Đường Mạc Đĩnh Chi',
    ward: 'P.Da Kao',
    district: 'Q.1',
    phoneNumber: '02871076465',
    openingTime: '7:00 - 23:00',
    image: require("../assets/image/branch/citiGround.jpg"),
    latLng: {
        latitude: 10.7853103,
        longitude: 106.6960621,
    }
},
{
    id: 3,
    name: 'Vincom 3/2',
    apartmentNumber: '3C',
    street: 'Đường 3/2',
    ward: 'P.11',
    district: 'Q.10',
    phoneNumber: '02871076465',
    openingTime: '7:00 - 22:00',
    image: require("../assets/image/branch/citiGround.jpg"),
    latLng: {
        latitude: 10.7759131,
        longitude: 106.6779457,
    }
}]


const Store = () => {
    const [search, setSearch] = useState("");
    const [viewMode, setViewMode] = useState("list");
    return (
        <View style={styles.container}>
            <TopBar />
            {/* search bar */}
            <View style={styles.viewSearchBar}>
                <SearchBar
                    // style={styles.searchBar}
                    containerStyle={styles.searchBar}
                    platform='android'
                    placeholder="Tìm địa chỉ"
                    placeholderTextColor={colors.gray}
                    onChangeText={setSearch}
                    value={search}
                    inputStyle={{ fontSize: 16, color: colors.textPrimary }}
                />
                <Pressable
                    style={styles.viewMap}
                    android_disableSound
                    onPress={() => setViewMode(viewMode === "map" ? "list" : "map")}>
                    <Ionicons name={viewMode === "map" ? 'map-outline' : "list"} size={20} color={colors.textPrimary} />
                    <Text style={styles.textMap}>{viewMode === "map" ? "BẢN ĐỒ" : "DANH SÁCH"}</Text>
                </Pressable>
            </View>
            {/* list branch */}
            {viewMode === "list" ?
                <FlatList
                    data={branchList}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => <BranchItem item={item} />}
                    ItemSeparatorComponent={() => <View style={{ marginBottom: 5 }} />}
                /> :
                <Map branchList={branchList} />
            }

        </View>
    )
}

export default Store

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    viewSearchBar: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20,
        marginHorizontal: 15,
    },
    searchBar: {
        borderRadius: 50,
        width: '65%',
        height: 30,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: colors.gray
    },
    viewMap: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textMap: {
        fontSize: 13,
        color: colors.textPrimary,
        marginLeft: 7
    }
})