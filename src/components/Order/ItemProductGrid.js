import { StyleSheet, Text, View, Pressable, Image, Dimensions } from 'react-native'
import React from 'react'
import { colors } from '../../constants/color'
import { useNavigation } from '@react-navigation/native'
import { formatCurrency } from '../../helpers/helper'
const ItemProductGrid = ({ item, sizeList }) => {
    const navigation = useNavigation();
    return (
        <Pressable style={styles.container}
            onPress={() => navigation.navigate("ProductDetail", { ...item, sizeList })}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image source={{ uri: item.image }} resizeMode='contain' style={styles.image} />
            </View>
            <View style={styles.viewText}>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.text}>{formatCurrency(item.price)}</Text>
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