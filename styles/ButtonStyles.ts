import { StyleSheet } from 'react-native';

const ButtonStyles = StyleSheet.create({
    buttonBlock: {
        marginBottom: 130,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        height: 80,
        position: 'relative',
        top: 30,
        backgroundColor: '#20253d',
        flexDirection: 'column',
    },
    text: {
        color: 'white',
        fontSize: 21,
        fontWeight: '500'
    },
    image: {
        width: 50,
        height: 30,
        resizeMode: 'contain'
    }
  });

export default ButtonStyles;