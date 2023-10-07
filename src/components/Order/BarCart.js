import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Cart from '../Common/Cart/Cart';
import LocationModal from './LocationModal';
import { colors } from '../../constants/color';
import { useSelector } from 'react-redux';
import { branchSelectedSelector } from '../../redux/selectors';
const BarCart = () => {
    const [showSelectLocation, setShowSelectLocation] = useState(false);
    const [selectedMethod, setSelectedMethod] = useState("Tại bàn")
    const branchSelected = useSelector(branchSelectedSelector);



    return (
        <View>
            {/* bar cart */}
            <View style={styles.barCart}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', width: '75%' }} onPress={() => setShowSelectLocation(true)}>
                    <Ionicons name='location' size={20} color={colors.white} style={{ paddingRight: 5 }} />
                    <View >
                        <Text style={{ fontSize: 12, color: colors.white }}>{selectedMethod}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: colors.white, paddingRight: 5 }}>{branchSelected?.name}</Text>
                            <Ionicons name='chevron-down-outline' size={14} color={colors.white} />
                        </View>
                    </View>
                </TouchableOpacity>
                <Cart />
            </View>
            {/* Modal location */}
            <LocationModal
                visibleModal={showSelectLocation}
                handleCloseModal={(visible) => setShowSelectLocation(visible)}
                handelSetMethod={(method) => { setSelectedMethod(method); setShowSelectLocation(false) }}
                selectedMethod={selectedMethod} />
        </View>
    )
}

export default BarCart

const styles = StyleSheet.create({
    barCart: {
        backgroundColor: colors.primary,
        paddingHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
})