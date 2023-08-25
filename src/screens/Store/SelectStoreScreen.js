import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RenderBranch from '../../components/Store/RenderBranch'
import BackBar from '../../components/Common/BackBar'
const SelectStoreScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <BackBar navigation={navigation} title={"Cửa hàng"} />
            <RenderBranch />
        </View>
    )
}

export default SelectStoreScreen

const styles = StyleSheet.create({})