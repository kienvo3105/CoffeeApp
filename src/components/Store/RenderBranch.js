import { StyleSheet, Text, View, Pressable, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'

import { SearchBar } from '@rneui/themed';
import BranchItem from './BranchItem';
import Map from './Map';
import { colors } from '../../constants/color'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useGet } from '../../api';

const RenderBranch = () => {
    const { fetchGet: fetchSearch, result: resultSearch, isError: isErrorSearch, isLoading: isLoadingSearch } = useGet();
    const { fetchGet, result, isError } = useGet();
    const [search, setSearch] = useState("");
    const [viewMode, setViewMode] = useState("list");
    const [branchList, setBranchList] = useState([]);
    const [branchSearch, setBranchSearch] = useState([]);

    const handleTextSearchChange = async (textSearch) => {
        setSearch(textSearch);
        if (textSearch.length > 0)
            await fetchSearch(`branch/search?keyword=${textSearch}`);
    }


    useEffect(() => {
        const fetchBranch = async () => {
            await fetchGet("branch");
        }
        fetchBranch();
    }, []);

    useEffect(() => {
        if (result && !isError) {
            setBranchList(result.allBranch);
        }
    }, [result]);

    useEffect(() => {
        if (resultSearch && !isErrorSearch)
            setBranchSearch(resultSearch.branches)
    }, [resultSearch])

    return (
        <View style={{ flex: 1 }}>
            {/* search bar */}
            <View style={styles.viewSearchBar}>
                <SearchBar
                    containerStyle={styles.searchBar}
                    platform='android'
                    placeholder="Tìm địa chỉ"
                    placeholderTextColor={colors.gray}
                    onChangeText={handleTextSearchChange}
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
            {search !== "" && !isLoadingSearch && branchSearch.length === 0 &&
                <Text style={{ fontSize: 15, color: colors.darkGray, textAlign: "center", marginTop: 15 }}>Không tìm thấy của hàng bạn cần!</Text>}
            {
                isLoadingSearch
                    ?
                    <ActivityIndicator size={'large'} color={colors.primary} />
                    :
                    (
                        viewMode === "list" ?
                            <FlatList
                                data={search === "" ? branchList : branchSearch}
                                keyExtractor={item => item.id.toString()}
                                renderItem={({ item }) => <BranchItem item={item} />}
                                ItemSeparatorComponent={() => <View style={{ marginBottom: 5 }} />}
                            /> :
                            <Map branchList={search === "" ? branchList : branchSearch} />
                    )
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