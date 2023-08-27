import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { colors } from '../../../constants/color'

import SelectTimeOrderModal from './SelectTimeOrderModal'

const Cart = () => {
    const [visibleModal, setVisibleModal] = useState(false)
    return (
        <Pressable style={styles.container}
            onPress={() => setVisibleModal(true)}>
            <Ionicons name='bag' size={30} color={colors.white} style={{ padding: 5 }} />
            <Text style={styles.numberProduct}>21</Text>
            {
                visibleModal &&
                <SelectTimeOrderModal visibleModal={visibleModal} handleCloseModal={() => setVisibleModal(false)} />
            }
        </Pressable>
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