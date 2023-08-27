import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

import Coins from '../../components/MemberCardMenu/Coins'
import { colors } from '../../constants/color'
import { listExchangeCoin } from '../../assets/data/data'
import ExchangeCoinItem from '../../components/MemberCardMenu/ExchangeCoinItem'
const ExchangeCoin = () => {
    return (
        <View style={styles.container}>
            <Coins />

            <Text style={{ fontSize: 15, fontWeight: 'bold', color: colors.textPrimary, marginBottom: 10 }}>Phần thưởng khả dụng</Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                style={{ height: 420 }}
                data={listExchangeCoin}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <ExchangeCoinItem {...item} />}
            />

        </View>
    )
}

export default ExchangeCoin

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        marginBottom: 10,
        marginHorizontal: 10
    }
})