import { StyleSheet, Text, View, Modal, TouchableWithoutFeedback, Image, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import { colors } from '../../../constants/color'
import { useNavigation } from '@react-navigation/native'
import DatePicker from 'react-native-date-picker'

import { useDispatch } from 'react-redux';
import cartSlice from '../../../redux/cartSlice'

const SelectTimeOrderModal = ({ visibleModal, handleCloseModal }) => {
    const navigation = useNavigation();
    const [date, setDate] = useState(new Date())
    const [currentDate, setCurrentDate] = useState(new Date())
    const dispatch = useDispatch();

    const handleChangeDate = () => {
        dispatch(cartSlice.actions.changeTime(date.toString()));
        handleCloseModal(false);
        navigation.navigate("Payment")
    }


    useEffect(() => {
        const minutes = new Date()
        minutes.setMinutes(minutes.getMinutes() + 15)
        setCurrentDate(minutes)
        setDate(minutes)
    }, []);

    return (
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
                        <Image source={require("../../../assets/image/icon/shipper.png")} resizeMode='contain' style={styles.image} />
                        <View>
                            <Text style={{ fontSize: 17, fontWeight: 'bold', color: colors.textPrimary }}>Đặt thời gian nhận hàng của bạn</Text>
                            <Text style={{ fontSize: 13, color: colors.textPrimary, marginTop: 5 }}>Hôm nay   |   {`${date.getHours()}:${date.getMinutes()}`}</Text>
                        </View>
                    </View>
                    <View style={{ height: 250, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                        <DatePicker
                            style={{ height: 150 }}
                            mode='time'
                            date={date}
                            onDateChange={setDate}
                            // minuteInterval={15}
                            minimumDate={currentDate}
                        // maximumDate={currentDate}
                        />
                        <Pressable style={styles.setTime}
                            onPress={handleChangeDate} >
                            <Text style={{ fontSize: 17, color: colors.white, fontWeight: 'bold' }}>ĐẶT THỜI GIAN</Text>
                        </Pressable>
                    </View>

                </View>
            </View>
            <TouchableWithoutFeedback onPress={() => handleCloseModal(false)}>
                <View style={styles.modalBg} />
            </TouchableWithoutFeedback>
        </Modal>
    )
}

export default SelectTimeOrderModal

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
        alignItems: 'center',
        paddingLeft: 10,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: colors.darkGray
    },
    image: {
        height: 40,
        width: 40,
        marginRight: 15
    },
    setTime: {
        marginTop: 30,
        backgroundColor: colors.primary,
        width: '90%',
        height: 40,
        color: colors.white,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
})