import { StyleSheet, Text, View, Image, TextInput, Animated, ScrollView, Dimensions, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'

import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { colors } from '../constants/color'
import Size from '../components/ProductDetail.js/Size'
import { formatCurrency } from '../helpers/helper'
import AddProductBar from '../components/ProductDetail.js/AddProductBar'




// const screenHeight = Dimensions.get('window').height;

// const ProductDetail = ({ route, navigation }) => {
//     const { title, price, id, image, describe } = route.params;
//     const [size, setSize] = useState("S");
//     const [finalPrice, setFinalPrice] = useState(formatCurrency(price));
//     const [text, onChangeText] = useState('');

//     const handlePressSize = (size, addMoney) => {
//         setSize(size);
//         setFinalPrice(formatCurrency(price + addMoney));
//     }

//     let AnimatedHeaderValue = new Animated.Value(0);
//     const Header_Max_Height = 240;
//     const Header_Min_Height = 40;

//     const animateHeaderBackgroundColor = AnimatedHeaderValue.interpolate({
//         inputRange: [160, Header_Max_Height - Header_Min_Height],
//         outputRange: [colors.white, colors.primary],
//         extrapolate: 'clamp'
//     });

//     const animateHeaderColorIconClose = AnimatedHeaderValue.interpolate({
//         inputRange: [160, Header_Max_Height - Header_Min_Height],
//         outputRange: [colors.textExtra, colors.white],
//         extrapolate: 'clamp'
//     })

//     return (
//         <View style={styles.container}>
//             {/* back bar */}
//             <Animated.View style={[styles.backBar, {
//                 // height: animateHeaderHeight,
//                 backgroundColor: animateHeaderBackgroundColor
//             }]}>
//                 <Ionicons name='close' size={40} color={colors.textPrimary} onPress={() => navigation.goBack()} />
//                 <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
//                     <Text style={{ color: colors.white, fontSize: 18, fontWeight: 'bold' }}>{title}</Text>
//                 </View>
//             </Animated.View>
//             <KeyboardAvoidingView
//                 behavior='height'
//             // keyboardVerticalOffset={50}
//             >
//                 <ScrollView
//                     // style={{ height: screenHeight - 150 }}
//                     showsVerticalScrollIndicator={false}
//                     scrollEventThrottle={16}
//                     onScroll={Animated.event(
//                         [{ nativeEvent: { contentOffset: { y: AnimatedHeaderValue } } }],
//                         { useNativeDriver: false }
//                     )}
//                 >
//                     {/* image product */}
//                     <View style={styles.top}>
//                         <Image source={image} resizeMode='contain' style={styles.image} />
//                     </View>
//                     {/* info and order product */}
//                     <View style={styles.bottom}>
//                         {/* info product */}
//                         <View>
//                             <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
//                                 <Text style={styles.textMain}>{title}</Text>
//                                 <Text style={styles.textMain}>{finalPrice}</Text>
//                             </View>
//                             <Text style={styles.describe}>{describe + "\n"}Giá đã bao gồm 8% VAT.</Text>
//                         </View>
//                         {/* size */}
//                         <View style={{ flexDirection: 'row', marginTop: 20, borderBottomWidth: 1, paddingBottom: 18, borderColor: colors.darkGray }}>
//                             <Size size={'S'} addMoney={0} selected={size} handlePressSize={handlePressSize} />
//                             <Size size={'M'} addMoney={10000} selected={size} handlePressSize={handlePressSize} />
//                             <Size size={'L'} addMoney={15000} selected={size} handlePressSize={handlePressSize} />
//                         </View>
//                         {/* note */}
//                         <View>
//                             <View style={{
//                                 flexDirection: 'row',
//                                 alignItems: 'center',
//                                 marginTop: 20
//                             }}>
//                                 <MaterialCommunityIcons name='note-edit-outline' size={25} color={colors.primary} />
//                                 <Text style={{ marginHorizontal: 10, fontSize: 14, fontWeight: 'bold', color: colors.textPrimary }}>Ghi chú</Text>
//                                 <Text style={{ fontSize: 11, color: colors.darkGray }}>Không bắt buộc</Text>
//                             </View>
//                             <TextInput
//                                 style={styles.input}
//                                 onChangeText={onChangeText}
//                                 value={text}
//                                 multiline
//                                 placeholder='Ghi chú'
//                                 placeholderTextColor={colors.darkGray}
//                             />
//                         </View>
//                     </View>
//                 </ScrollView>
//                 <View style={styles.addProductBar}>

//                     <AddProductBar price={finalPrice} />
//                 </View>
//             </KeyboardAvoidingView>
//         </View>
//     )
// }

// export default ProductDetail



// const styles = StyleSheet.create({
//     container: {
//         // flex: 1,
//         // justifyContent: 'space-between',
//         // paddingTop: 10,
//         // paddingHorizontal: 15,
//         backgroundColor: colors.white
//     },
//     backBar: {
//         flexDirection: 'row',
//         alignItems: 'center'
//     },
//     image: {
//         height: 220,
//         width: 220
//     },
//     top: {
//         flex: 1,
//         alignItems: 'center',
//         paddingTop: 10,
//         paddingHorizontal: 15,
//         marginBottom: 10
//     },
//     bottom: {
//         flex: 1,
//         backgroundColor: colors.background,
//         paddingTop: 10,
//         paddingHorizontal: 15,
//         borderTopLeftRadius: 20,
//         borderTopRightRadius: 20,
//         // paddingBottom: 100
//     },
//     textMain: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         color: colors.textPrimary
//     },
//     describe: {
//         textAlign: 'justify',
//         paddingRight: 20,
//         color: colors.textExtra,
//         fontSize: 13
//     },
//     input: {
//         borderWidth: 1,
//         borderColor: colors.darkGray,
//         marginTop: 10,
//         paddingHorizontal: 10,
//     },
//     addProductBar: {
//         // flex: 1,
//         // position: '',
//         // justifyContent: 'flex-end',
//         // // justifyContent: 'space-between',
//         // alignItems: 'center'
//     }
// })


const screenHeight = Dimensions.get('window').height;

const ProductDetail = ({ route, navigation }) => {
    const { title, price, id, image, describe } = route.params;
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
                    <Image source={image} resizeMode='contain' style={styles.image} />
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
                        <Size size={'S'} addMoney={0} selected={size} handlePressSize={handlePressSize} />
                        <Size size={'M'} addMoney={10000} selected={size} handlePressSize={handlePressSize} />
                        <Size size={'L'} addMoney={15000} selected={size} handlePressSize={handlePressSize} />
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