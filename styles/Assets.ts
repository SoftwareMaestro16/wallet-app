import { StyleSheet } from 'react-native';
import { Colors } from '../components/shared/utils';

const AssetsStyles = StyleSheet.create({
    image: {
        width: 55,
        height: 55,
        margin: 7,
        borderRadius: "50%",
        objectFit: "cover"
    },
    assetContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    nameAsset: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    balanceAsset: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'right'
    },
    balanceUsdAsset: {
        fontSize: 19,
        fontWeight: 500,
        color: Colors.darkGray,
        textAlign: 'right'
    },
    priceTokenAsset: {
        fontSize: 19,
        fontWeight: 500,
        color: Colors.darkGray
    },
    percentChangeAsset: {
        fontSize: 19,
        fontWeight: 400,
        color: 'red'
    },
    leftInfo: {
        flexDirection: 'column',
    },
    leftInfoBottom: {
        columnGap: 7,
        flexDirection: 'row',
    },
    rightInfo: {
        position: 'absolute',
        right: 0,
        marginRight: 15,
        flexDirection: 'column', 
    } 
  });

export default AssetsStyles;