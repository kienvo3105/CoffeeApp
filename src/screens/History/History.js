import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import TopBar from '../../components/Common/TopBar'

import TabHistory from '../../navigations/TabHistory';

const History = () => {
    return (
        <View style={styles.container}>
            <TopBar />
            <View style={{ marginBottom: 6 }} />
            <TabHistory />
        </View >
    )
}

export default History;

const styles = StyleSheet.create({
    container: { flex: 1, }
})