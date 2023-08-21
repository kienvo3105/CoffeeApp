import { StyleSheet, Text, View, Pressable, Image, Dimensions } from 'react-native'
import React from 'react'
import { colors } from '../../constants/color'
const ItemProductGrid = ({ item, handlePressItem }) => {
    return (
        <Pressable style={styles.container}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image source={item.image} resizeMode='contain' style={styles.image} />
            </View>
            <View style={styles.viewText}>
                <Text style={styles.text}>{item.title}</Text>
                <Text style={styles.text}>{item.price}</Text>
            </View>
        </Pressable>
    )
}

export default ItemProductGrid;

const width = Dimensions.get('window').width - 40;

const styles = StyleSheet.create({
    container: {
        width: width / 2 - 10,
        height: width / 2 - 10,
        borderWidth: 1,
        borderColor: '#dedede',
        borderRadius: 10,
        padding: 8
    },
    image: {
        height: 100,
        width: 100,
    },
    viewText: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 5
    },
    text: {
        fontSize: 15,
        color: colors.textPrimary
    }
})