import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
const Map = ({ branchList }) => {
    console.log("🚀 ~ file: Map.js:5 ~ Map ~ branchList:", branchList)
    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={{ width: '100%', height: '100%' }}
                region={{
                    latitude: 10.7652479,
                    longitude: 106.6800000,
                    latitudeDelta: 0.2222,
                    longitudeDelta: 0.1621,
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
                        coordinate={{
                            latitude: branch.Address.latitude,
                            longitude: branch.Address.longitude,
                        }}
                        title={branch.name}
                        description={`${branch.Address.houseNumber} ${branch.Address.street}, ${branch.Address.commune} , ${branch.Address.district}`}
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