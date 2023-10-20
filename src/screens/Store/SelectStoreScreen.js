import { View } from 'react-native';
import React from 'react';
import RenderBranch from '../../components/Store/RenderBranch';
import BackBar from '../../components/Common/BackBar';
import { branchSelectedSelector } from '../../redux/selectors';
import { useSelector } from 'react-redux';
const SelectStoreScreen = ({ navigation }) => {
    const branchSelected = useSelector(branchSelectedSelector);
    return (
        <View style={{ flex: 1 }}>
            {branchSelected &&
                <BackBar navigation={navigation} title={"Cửa hàng"} />
            }
            <RenderBranch />
        </View>
    )
}

export default SelectStoreScreen
