import React from 'react';
import {useNavigation} from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity} from 'react-native';

import logoImg from '../../assets/logo.png';
import heroesImg from '../../assets/heroes.png';

import styles from './styles';

export default function About(){
    const navigation = useNavigation();
    
    function navigateBack(){
        navigation.goBack(); 
    }

    return(
        <View style={styles.container}>
            <Image source = {logoImg}/>

            <Image source = {heroesImg} style = {styles.heroContainer}/>

            <Text style = {styles.aboutText}>
                Aplicativo mobile desenvolvido durante a Semana OmniStack 11
            </Text>

            <TouchableOpacity style = {styles.action} onPress = {navigateBack}>
                <Text style = {styles.actionText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
};