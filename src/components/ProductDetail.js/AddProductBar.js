import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { colors } from '../../constants/color'
import { formatCurrency } from '../../helpers/helper'
const AddProductBar = ({ price, handleAddProduct }) => {
    const [numberProduct, setNumberProduct] = useState(1)


    const handleChangeProduct = (action) => {
        if (action == "plus")
            setNumberProduct((prevState) => prevState < 50 ? prevState + 1 : 50);
        else
            setNumberProduct((prevState) => prevState > 2 ? prevState - 1 : 1);

    }

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, marginLeft: 20 }}>
                <AntDesign
                    name='minussquareo'
                    size={30}
                    color={numberProduct > 1 ? colors.primary : colors.darkGray}
                    onPress={() => handleChangeProduct("sub")}
                />
                <Text style={{ paddingHorizontal: 15, fontSize: 15, color: colors.textPrimary, width: 50, textAlign: 'center' }}>{numberProduct}</Text>
                <AntDesign
                    name='plussquareo'
                    size={30}
                    color={numberProduct < 50 ? colors.primary : colors.darkGray}
                    onPress={() => handleChangeProduct("plus")}
                />
            </View>
            <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                onPress={() => handleAddProduct(numberProduct)}>
                <Text style={styles.price}>Thêm {formatCurrency(price * numberProduct)}</Text>
            </TouchableOpacity>
        </View >
    )
}

export default AddProductBar

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // height: 80,
        backgroundColor: colors.white,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15
    },
    price: {
        fontSize: 15,
        fontWeight: 'bold',
        color: colors.white,
        backgroundColor: colors.primary,
        // paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
        marginRight: 20,
        width: 170,
        textAlign: 'center'
    },
})