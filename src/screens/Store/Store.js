import { StyleSheet, View, } from 'react-native'
import React from 'react'
import TopBar from '../../components/Common/TopBar'
import RenderBranch from '../../components/Store/RenderBranch'


const Store = () => {
    return (
        <View style={styles.container}>
            <TopBar />
            <RenderBranch />
        </View>
    )
}

export default Store

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

})