import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'

import Feather from 'react-native-vector-icons/Feather'
import { colors } from '../../constants/color'

const BranchItem = ({ item }) => {
    return (
        <Pressable style={styles.container}>
            <Image source={item.image} resizeMode='contain' style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.nameBranch}>{item.name}</Text>
                <Text style={styles.text}>{item.apartmentNumber} {item.street}{'\n'}{item.ward}, {item.district}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Feather name='phone' size={17} color={colors.textExtra} style={{ marginRight: 5 }} />
                    <Text style={styles.text}>{item.phoneNumber}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={[styles.text, styles.around]}>Mở</Text>
                    <Text style={styles.text}>{item.openingTime}</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default BranchItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 5,
        backgroundColor: colors.white,
        marginHorizontal: 10,
        borderRadius: 8
    },
    image: {
        height: 110,
        width: 110,
        marginRight: 15
    },
    content: {
        backgroundColor: 'white',
        justifyContent: 'space-between'
    },
    nameBranch: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.textPrimary
    },
    text: {
        fontSize: 15,
        marginTop: 5
    },
    around: {
        marginRight: 10,
        backgroundColor: colors.green,
        paddingVertical: 2,
        paddingHorizontal: 7,
        borderRadius: 20,
        color: colors.white,
        fontWeight: 'bold'
    }
})