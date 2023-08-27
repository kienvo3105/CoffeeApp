import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native'
import React, { useState } from 'react'

import { SearchBar } from '@rneui/themed';
import BranchItem from './BranchItem';
import Map from './Map';
import { colors } from '../../constants/color'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { branchList } from '../../assets/data/data';

const RenderBranch = () => {
    const [search, setSearch] = useState("");
    const [viewMode, setViewMode] = useState("list");
    return (
        <View style={{ flex: 1 }}>
            {/* search bar */}
            <View style={styles.viewSearchBar}>
                <SearchBar
                    containerStyle={styles.searchBar}
                    platform='android'
                    placeholder="Tìm địa chỉ"
                    placeholderTextColor={colors.gray}
                    onChangeText={(search) => setSearch(search)}
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

export default RenderBranch

const styles = StyleSheet.create({
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