import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React, { useState } from 'react'

import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { colors } from '../constants/color'
import Size from '../components/ProductDetail.js/Size'
import { formatCurrency } from '../helpers/helper'
import AddProductBar from '../components/ProductDetail.js/AddProductBar'

const ProductDetail = ({ route, navigation }) => {
    const { title, price, id, image, describe, sizeList } = route.params;
    const [size, setSize] = useState("S");
    const [finalPrice, setFinalPrice] = useState(price);
    const [text, onChangeText] = useState('');

    const handlePressSize = (size, addMoney) => {
        setSize(size);
        setFinalPrice(price + addMoney);
    }

    return (
        <View style={styles.container}>
            {/* back bar */}
            <View style={styles.backBar}>
                <Ionicons name='close' size={40} color={colors.textPrimary} onPress={() => navigation.goBack()} />
                <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                    <Text style={{ color: colors.white, fontSize: 18, fontWeight: 'bold' }}>{title}</Text>
                </View>
            </View>
            <View style={{ flex: 1, }}>
                {/* image product */}
                <View style={styles.top}>
                    <Image source={{ uri: image }} resizeMode='contain' style={styles.image} />
                </View>
                {/* info and order product */}
                <View style={styles.bottom}>
                    {/* info product */}
                    <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                            <Text style={styles.textMain}>{title}</Text>
                            <Text style={styles.textMain}>{formatCurrency(finalPrice)}</Text>
                        </View>
                        <Text style={styles.describe}>{describe + "\n"}Giá đã bao gồm 8% VAT.</Text>
                    </View>
                    {/* size */}
                    <View style={{ flexDirection: 'row', marginTop: 20, borderBottomWidth: 1, paddingBottom: 18, borderColor: colors.darkGray }}>
                        {sizeList.map((infSize) => {
                            return (<Size key={infSize.name} size={infSize.name} addMoney={infSize.additionalPrice} selected={size} handlePressSize={handlePressSize} />)
                        })}
                    </View>
                    {/* note */}
                    <View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: 20
                        }}>
                            <MaterialCommunityIcons name='note-edit-outline' size={25} color={colors.primary} />
                            <Text style={{ marginHorizontal: 10, fontSize: 14, fontWeight: 'bold', color: colors.textPrimary }}>Ghi chú</Text>
                            <Text style={{ fontSize: 11, color: colors.darkGray }}>Không bắt buộc</Text>
                        </View>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            value={text}
                            multiline
                            placeholder='Ghi chú'
                            placeholderTextColor={colors.darkGray}
                        />
                    </View>
                </View>
            </View>
            <AddProductBar price={finalPrice} />
        </View>
    )
}

export default ProductDetail



const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'space-between',
        // paddingTop: 10,
        // paddingHorizontal: 15,
        backgroundColor: colors.white
    },
    backBar: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        height: 220,
        width: 220
    },
    top: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 10,
        paddingHorizontal: 15,
        marginBottom: 10
    },
    bottom: {
        flex: 2,
        backgroundColor: colors.background,
        paddingTop: 10,
        paddingHorizontal: 15,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        // paddingBottom: 100
    },
    textMain: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.textPrimary
    },
    describe: {
        textAlign: 'justify',
        paddingRight: 20,
        color: colors.textExtra,
        fontSize: 13
    },
    input: {
        borderWidth: 1,
        borderColor: colors.darkGray,
        marginTop: 10,
        paddingHorizontal: 10,
    },

})