import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },

    aboutText:{
        fontSize: 16,
        color: '#737380',
        marginVertical: 16,
        marginHorizontal: 16,
        textAlign: 'center'
    },

    heroContainer:{
        width: '100%',
        marginHorizontal: 16,
        resizeMode: 'contain'
        
    },

    actionText:{
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
    },

    action:{
        backgroundColor: '#E02041',
        borderRadius: 8,
        height:50,
        width: '48%',
        justifyContent:'center',
        alignItems: 'center',
    },
});