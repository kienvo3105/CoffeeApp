import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { colors } from '../../constants/color'
const Cart = () => {
    return (
        <View style={styles.container}>
            <Ionicons name='bag' size={30} color={colors.white} style={{ padding: 5 }} />
            <Text style={styles.numberProduct}>21</Text>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        borderRadius: 100,
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberProduct: {
        position: 'absolute',
        paddingTop: 5,
        fontSize: 12,
        fontWeight: 'bold',
        color: colors.primary
    }
})