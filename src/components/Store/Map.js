import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
const Map = ({ branchList }) => {
    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={{ width: '100%', height: '100%' }}
                region={{
                    latitude: 10.7652479,
                    longitude: 106.7069006,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                {/* <Marker
                    coordinate={{
                        latitude: 10.770422,
                        longitude: 106.7190839,
                    }}
                    title='Sala 2'
                    description='125 Nguyễn Cơ Thạch, P.An Lợi Đông, Q.2'
                    onCalloutPress={() => console.log('sala 2')}
                /> */}
                {branchList.map((branch) => (
                    <Marker
                        key={branch.id.toString()}
                        coordinate={branch.latLng}
                        title={branch.name}
                        description={`${branch.apartmentNumber} ${branch.street}, ${branch.ward} , ${branch.district}`}
                        onCalloutPress={() => console.log(branch.name)}
                    />
                ))}
            </MapView>
        </View>
    )
}

export default Map

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})