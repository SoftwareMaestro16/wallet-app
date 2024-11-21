import { StyleSheet } from 'react-native';

const NavigButtonStyles = StyleSheet.create({
    buttonBlock: {
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        position: 'relative',
        bottom: 3,
        flexDirection: 'column',
    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500'
    },
    image: {
        width: 50,
        height: 30,
        resizeMode: 'contain'
    }
  });

export default NavigButtonStyles;