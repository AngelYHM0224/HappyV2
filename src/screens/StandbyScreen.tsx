import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootParamList } from '../navigation/AppNavigator';
import { StandbyStyles } from '../styles/StandbyStyles';

type StandbyScreenNavigationProp = StackNavigationProp<RootParamList, 'Standby'>;

const StandbyScreen = () => {
    const navigation = useNavigation<StandbyScreenNavigationProp>();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Login');
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={StandbyStyles.container}>
            {/* Ajustamos la ruta de la imagen */}
            <Image source={require('../../assets/image/logosinfondo.png')} style={StandbyStyles.logo} />
            <Text style={StandbyStyles.text}>Happy GPT</Text>
        </View>
    );
};

export default StandbyScreen;
