import { StyleSheet, Text, View, Modal, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../../constants/color';
import ItemDeliveryMethod from './ItemDeliveryMethod';

const iconDish = require("../../assets/image/icon/dish.png");
const iconShop = require("../../assets/image/icon/shop.png");

const LocationModal = ({ visibleModal, handleCloseModal, selectedMethod, handelSetMethod }) => {
    // const [selected, setSelected] = useState("Tại bàn")
    return (
        // <View>
        <Modal
            animationType="slide"
            statusBarTranslucent
            transparent
            visible={visibleModal}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                handleCloseModal(!visibleModal);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.header} >
                        <Ionicons name='close-outline' size={30} color={colors.textPrimary} onPress={() => handleCloseModal(false)} style={{ paddingHorizontal: 10 }} />
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: colors.textPrimary }}>Chọn phương thức giao hàng</Text>
                    </View>
                    <View>
                        <ItemDeliveryMethod image={iconDish} method={"Tại bàn"} selected={selectedMethod} handlePressSelect={() => handelSetMethod("Tại bàn")} />
                        <ItemDeliveryMethod image={iconShop} method={"Mang về"} selected={selectedMethod} handlePressSelect={() => handelSetMethod("Mang về")} />
                    </View>
                </View>
            </View>
            <TouchableWithoutFeedback onPress={() => handleCloseModal(false)}>
                <View style={styles.modalBg} />
            </TouchableWithoutFeedback>
        </Modal>
        // </View>
    )
}

export default LocationModal

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: colors.white,
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        zIndex: 1000,
    },
    modalView: {
        // margin: 10,
        backgroundColor: colors.white,
        borderRadius: 20,
        padding: 10
        // alignItems: 'center'
    },
    modalBg: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundColor: 'black',
        opacity: 0.2
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center'
    },
})