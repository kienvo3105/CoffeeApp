import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../constants/color'
import AntDesign from 'react-native-vector-icons/AntDesign'
const ExchangeCoinItem = ({ title, price, change, image }) => {
    const [numberProduct, setNumberProduct] = useState(1);
    const handleChangeProduct = (action) => {
        if (action == "plus")
            setNumberProduct((prevState) => prevState < 50 ? prevState + 1 : 50);
        else
            setNumberProduct((prevState) => prevState > 2 ? prevState - 1 : 1);

    }
    return (
        <View style={styles.container}>
            <Image source={image} resizeMode='contain' style={styles.image} />
            <View style={{ marginHorizontal: 5, flex: 1 }}>
                <Text style={{ fontSize: 15, fontWeight: 'bold', color: colors.textPrimary }}>{title}</Text>
                <Text style={{ fontSize: 13, color: colors.darkGray, backgroundColor: colors.background, width: 80, height: 20, textAlignVertical: 'center', textAlign: 'center', borderRadius: 20, marginVertical: 5 }}>{price} coins</Text>
                <View style={{ borderTopWidth: 1, borderTopColor: colors.gray }} />

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, marginTop: 10 }}>
                        <AntDesign
                            name='minussquareo'
                            size={25}
                            color={numberProduct > 1 ? colors.primary : colors.darkGray}
                            onPress={() => handleChangeProduct("sub")}
                        />
                        <Text style={{ paddingHorizontal: 15, fontSize: 13, color: colors.textPrimary, width: 50, textAlign: 'center' }}>{numberProduct}</Text>
                        <AntDesign
                            name='plussquareo'
                            size={25}
                            color={numberProduct < 50 ? colors.primary : colors.darkGray}
                            onPress={() => handleChangeProduct("plus")}
                        />
                    </View>
                    <Pressable>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: colors.primary }}>Đổi</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default ExchangeCoinItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        marginBottom: 5,
        padding: 5,
        borderRadius: 10
    },
    image: {
        height: 80,
        width: 80
    }
})