import React, { useState, useEffect } from 'react';
import { View, Image, Pressable, Dimensions, StyleSheet } from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import { useNavigation } from '@react-navigation/native';

const AdBanner = () => {
    const images = [
        require('../../assets/image/promotion/2.jpg'),
        require('../../assets/image/promotion/3.jpg'),
        require('../../assets/image/promotion/4.jpg'),
    ];
    const navigation = useNavigation();

    return (
        // <View style={styles.container}>
        <SwiperFlatList
            autoplay
            autoplayDelay={3}
            autoplayLoop
            index={2}
            // showPagination
            data={images}
            renderItem={({ item }) => (
                <Pressable style={styles.child}>
                    <Image source={item} resizeMode='stretch' style={styles.image} />
                </Pressable>
            )}
        />
        // </View>
    );
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        // flex: 1,

        // backgroundColor: 'white'
    },
    child: {
        width,
        // height: 200,
        // justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '80%',
        height: 120
    }
});

export default AdBanner;
