import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Coins from '../../components/MemberCardMenu/Coins'
const Coupon = () => {
    return (
        <View style={styles.container}>
            <Coins />
        </View>
    )
}

export default Coupon

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        marginBottom: 10,
        marginHorizontal: 10
    }
})